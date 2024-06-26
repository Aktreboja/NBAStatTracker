"use client";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider, createTheme } from "@mui/material";
import React, { useMemo } from "react";

import CssBaseline from "@mui/material/CssBaseline";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Work on this later
  // const darkModePref = useMediaQuery('(prefers-color-scheme: dark');

  // Memoize result from OS preferences on dark mode.
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          // mode: darkModePref ? 'dark' : 'light'
        },
      }),
    [],
  );

  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
