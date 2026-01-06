import type { Metadata } from "next";
import { DotGothic16, Space_Mono } from "next/font/google";
import "./globals.css";

const dotGothic16 = DotGothic16({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dot-gothic",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Chuan Lin - Software Engineer | AWS SDE",
  description: "Full-stack engineer with nearly 4 years of AWS experience, specializing in React, Spring Boot, and cloud solutions. Expert in database optimization, real-time systems, and scalable architectures.",
  keywords: ["Software Engineer", "AWS", "React", "Spring Boot", "Full Stack", "TypeScript", "Java", "PostgreSQL"],
  authors: [{ name: "Chuan Lin" }],
  creator: "Chuan Lin",
  publisher: "Chuan Lin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chuan-lin.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Chuan Lin - Software Engineer | AWS SDE",
    description: "Full-stack engineer with nearly 4 years of AWS experience, specializing in React, Spring Boot, and cloud solutions.",
    url: "https://chuan-lin.dev",
    siteName: "Chuan Lin Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chuan Lin - Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chuan Lin - Software Engineer | AWS SDE",
    description: "Full-stack engineer with nearly 4 years of AWS experience, specializing in React, Spring Boot, and cloud solutions.",
    images: ["/og-image.jpg"],
    creator: "@chuanlin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark-theme');
                } else {
                  document.documentElement.classList.add('light-theme');
                }
              } catch (e) {
                // Fallback to light theme if localStorage is not available
                document.documentElement.classList.add('light-theme');
              }
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
