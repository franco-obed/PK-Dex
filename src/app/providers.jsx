// app/providers.tsx
"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import StoreProvider from "./StoreProvider";

export function Providers({ children }) {
  return (
    <StoreProvider>
      <HeroUIProvider>
        <NextThemesProvider
          attribute={"class"}
          defaultTheme={"dark"}
          disableTransitionOnChange
          enableSystem={false}
        >
          {children}
        </NextThemesProvider>
      </HeroUIProvider>
    </StoreProvider>
  );
}
