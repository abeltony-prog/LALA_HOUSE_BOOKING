import { gql } from "graphql-request";
import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { hasuraClient } from "src/client/hasuraClient";

interface UserSession {
  name?: string | null | undefined;
  email?: string | null | undefined;
  title?: string | null | undefined;
}

const query = {
  getUserByEmail: gql`
  query getUserByEmail($email: String!) {
    users(where: {email: {_eq: $email}}) {
      email
      gender
      password
      role
      UID
      name
    }
  }  
  `,
};

export default NextAuth({
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  providers: [
    google({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      profile: async (profile) => {
        const data = await hasuraClient(query.getUserByEmail, {
          email: profile.email,
        });
        // Check if the user exists in the database
        if (data?.users?.length > 0) {
          const user = data.users[0];
          return {
            // Ensure `id` fallback or removal
            id: user.UID || null, // Use `UUID` or set it as `null` if absent
            name: user.name,
            email: user.email,
            title: user.role,
          };
        }
        // If no user is found, return the default Google profile data
        return {
          ...profile,
          id: profile.sub || null, // Fallback to `sub` (Google's unique user ID) or `null`
        };
      },
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          ref: "",
          placeholder: "example@LALA.co",
        },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials, req) => {
        const data = await hasuraClient(query.getUserByEmail, {
          email: credentials?.email,
        });
        const { email, password } = credentials as unknown as {
          email: string;
          password: string;
        };

        const isPasswordMatch = await bcrypt.compare(
          password,
          data?.users[0]?.password
        );
        if (email === data?.users[0]?.email && isPasswordMatch) {
          return {
            id: `${data?.users[0]?.UID}`,
            name: `${data?.users[0]?.name}`,
            email: `${data?.users[0]?.email}`,
            role: `${data?.users[0]?.role}`,
          };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      const sessionUser: UserSession = session?.user || {}; // Initialize with empty object if session.user is undefined
      if (typeof token.title === "string") {
        sessionUser.title = token.title;
      } else {
        sessionUser.title = null;
      }

      return { ...session, user: sessionUser };
    },
    async jwt({ token, user }) {
      if (user) {
        const customUser = user as {
          name: string;
          email: string;
        };

        // Store user data in the JWT token
        token.name = customUser.name;
        token.email = customUser.email;
      }

      return token;
    },
  },
  pages: {
    error: "/signin", // Redirect to the Login page if there is an error
  },
});
