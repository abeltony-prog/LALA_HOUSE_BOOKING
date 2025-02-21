import { gql } from "graphql-request";
import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { hasuraClient } from "src/client/hasuraClient";

interface UserSession {
  name?: string | null | undefined;
  email?: string | null | undefined;
  role?: string | null | undefined;
}

const query = {
  getUserByEmail: gql`
    query getUserByEmail($email: String!) {
      users(where: { email: { _eq: $email } }) {
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
            id: user.UID || null,
            name: user.name,
            email: user.email,
            role: user.role,
            newUser: false, // Indicate user exists
          };
        }
        // If no user is found
        return {
          id: profile.sub, // Use Google’s unique `sub` as the fallback ID
          name: profile.name,
          email: profile.email,
          role: "newUser", // Mark them as a new user
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
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role || "newUser", 
        },
      };
    },
  
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role || "newUser"; 
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    }
  },
  pages: {
    error: "/signin", 
  },
});
