import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { AuthProvider } from "@/lib/auth-context"
import { CartProvider } from "@/lib/cart-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingAuthButton } from "@/components/floating-auth-button"
import { Toaster } from "@/components/ui/toaster"
import { ClientLayout } from "@/components/ClientLayout"

export const metadata: Metadata = {
  title: "Châteaux Lastours - Domaine Viticole de Prestige",
  description:
    "Découvrez l'excellence viticole du sud de la France avec Châteaux Lastours. Vins d'exception, terroir unique, tradition et savoir-faire.",
  generator: "v0.app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      {/* The default theme is now dark, so we don't need to add "dark" className to the body */}
      <body suppressHydrationWarning className="antialiased">
        <AuthProvider>
          <CartProvider>
            <ClientLayout>
              <Header />
              <main className="pt-20">{children}</main>
              <Footer />
              <FloatingAuthButton />
              <Toaster />
            </ClientLayout>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
