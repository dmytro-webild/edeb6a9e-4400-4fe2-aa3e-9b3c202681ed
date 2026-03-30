import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Source_Sans_3 } from "next/font/google";



export const metadata: Metadata = {
  title: 'Moda Home Furniture | Stylish & Affordable Houston Furniture',
  description: 'Shop stylish, affordable furniture in Houston at Moda Home Furniture. Sofas, beds, sectionals & more. Easy financing, fast delivery, and unbeatable service.',
  keywords: ["furniture, Houston, sofas, beds, sectionals, financing, affordable furniture, home decor"],
  openGraph: {
    "title": "Moda Home Furniture | Stylish & Affordable Houston Furniture",
    "description": "High-quality, affordable furniture with easy financing.",
    "siteName": "Moda Home Furniture"
  },
};

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${sourceSans3.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
