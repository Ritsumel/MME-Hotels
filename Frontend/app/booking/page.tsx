import { Suspense } from "react"
import type { Metadata } from "next"
import { BookingContent } from "@/components/booking-content"

export const metadata: Metadata = {
  title: "Book a Stay | MME Hotels",
  description:
    "Browse and book luxury hotel rooms across Stockholm, Gothenburg, Malmo, and Uppsala. Find the perfect Scandinavian retreat at MME Hotels.",
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center pt-16">
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  )
}
