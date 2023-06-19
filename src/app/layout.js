import StyledComponentsRegistry from "./lib/registry";
import "./globals.css";
import { NextAuthProvider } from "./providers";
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <NextAuthProvider>{children}</NextAuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
