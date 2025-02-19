import "./globals.css";
import { Providers } from "./providers";
import NavBar from "./components/NavBar";
// import NavBar from "@/app/components/NavBar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
