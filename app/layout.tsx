import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Raleway } from "next/font/google";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import NavBar from "./component/NavBar";
import { ThemeProvider } from "./component/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
const noto_serif = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Designer to Developer",
  description: "Blog ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
