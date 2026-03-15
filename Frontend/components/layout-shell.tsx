"use client"

import { usePathname } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const HIDDEN_SHELL_ROUTES = ["/login", "/admin"]

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideShell = HIDDEN_SHELL_ROUTES.some((route) =>
    pathname.startsWith(route)
  )

  if (hideShell) {
    return <>{children}</>
  }

  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}
