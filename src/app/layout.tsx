import { TRPCReactProvider } from "@/trpc/react";

// Components
import Container from "@/views/layout/container";

// Dependencies
import { GeistSans } from "geist/font/sans";

// Styling
import "@/styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <Container>{children}</Container>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
