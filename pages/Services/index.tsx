import MainTheme from "@components/MainTheme";
import React from "react";

export default function ServicesPage() {
  const services = [
    {
      icon: (
        <svg
          className="h-16 w-16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="4" y="6" width="16" height="12" />
          <path d="M7 10L7 14M11 8L11 16M15 6L15 18M19 10L19 14" />
        </svg>
      ),
      title: "Lorem Ipsum",
      description:
        "is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      icon: (
        <svg
          className="h-16 w-16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18M8 14h2M14 14h2M8 18h2M14 18h2" />
        </svg>
      ),
      title: "Lorem Ipsum",
      description:
        "is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      icon: (
        <svg
          className="h-16 w-16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 7h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2z" />
          <path d="M12 7v14M8 3l8 4" />
        </svg>
      ),
      title: "Lorem Ipsum",
      description:
        "is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      icon: (
        <svg
          className="h-16 w-16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 17h2a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12v.01" />
        </svg>
      ),
      title: "Lorem Ipsum",
      description:
        "is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
  ];
  return (
    <MainTheme>
      <section className="container mx-auto px-4 py-12 md:py-24">
        <h2 className="mb-12 text-3xl font-bold text-[#2B3990] md:text-4xl">
          Services
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-6 sm:flex-row"
            >
              <div className="shrink-0 text-black">{service.icon}</div>
              <div>
                <h3 className="mb-3 text-xl font-bold text-[#2B3990]">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainTheme>
  );
}
