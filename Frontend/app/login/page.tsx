import type { Metadata } from "next"
import { LoginForm } from "@/components/login-form"

export const metadata: Metadata = {
  title: "Log In | MME Hotels",
  description:
    "Sign in to your MME Hotels account to manage reservations, earn loyalty rewards, and access exclusive member rates.",
}

export default function LoginPage() {
  return <LoginForm />
}
