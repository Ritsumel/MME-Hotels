import type { Metadata } from "next"
import { AdminLoginForm } from "@/components/admin-login-form"

export const metadata: Metadata = {
  title: "Admin Login | MME Hotels",
  description: "Sign in to the MME Hotels administration portal.",
}

export default function AdminLoginPage() {
  return <AdminLoginForm />
}
