import type { Metadata } from "next"
import { AdminDashboard } from "@/components/admin-dashboard"

export const metadata: Metadata = {
  title: "Admin Dashboard | MME Hotels",
  description: "Manage MME Hotels properties across Sweden.",
}

export default function AdminPage() {
  return <AdminDashboard />
}
