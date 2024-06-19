import { SessionProvider } from "next-auth/react";

function ClientProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default ClientProvider;
