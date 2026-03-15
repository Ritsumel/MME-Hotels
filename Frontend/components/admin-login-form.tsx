"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AdminLoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Demo credentials check — in production this would hit an API
    setTimeout(() => {
      if (username === "admin" && password === "admin") {
        sessionStorage.setItem("mme-admin-auth", "true")
        router.push("/admin")
      } else {
        setError("Invalid credentials. Try admin / admin for the demo.")
        setLoading(false)
      }
    }, 600)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-foreground px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
            <ShieldCheck className="h-6 w-6 text-foreground" />
          </div>
          <Link href="/" className="inline-block">
            <span className="font-serif text-2xl font-bold text-primary-foreground">
              MME
            </span>
            <span className="ml-2 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
              Hotels
            </span>
          </Link>
          <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/40">
            Administration Portal
          </p>
        </div>

        <div className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm">
          <h1 className="text-center font-serif text-xl font-bold text-primary-foreground">
            Admin Sign In
          </h1>
          <p className="mt-1 text-center text-xs text-primary-foreground/50">
            Access the hotel management dashboard
          </p>

          {error && (
            <div className="mt-4 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2">
              <p className="text-xs text-red-300">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="admin-username"
                className="text-xs font-medium text-primary-foreground/70"
              >
                Username
              </Label>
              <Input
                id="admin-username"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:ring-accent"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="admin-password"
                className="text-xs font-medium text-primary-foreground/70"
              >
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-foreground/40" />
                <Input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="border-primary-foreground/20 bg-primary-foreground/10 pl-9 pr-10 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:ring-accent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/40 hover:text-primary-foreground/70"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="mt-2 w-full bg-accent text-foreground hover:bg-accent/90 disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-primary-foreground/30">
          Demo credentials: admin / admin
        </p>
        <div className="mt-4 text-center">
          <Link
            href="/"
            className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground/70"
          >
            Back to website
          </Link>
        </div>
      </div>
    </div>
  )
}
