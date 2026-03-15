import Image from "next/image"
import { Utensils, Waves, Wifi, Car } from "lucide-react"

const features = [
  {
    icon: Utensils,
    title: "Fine Dining",
    description:
      "Award-winning Nordic cuisine with locally sourced ingredients at every location.",
  },
  {
    icon: Waves,
    title: "Spa & Wellness",
    description:
      "Traditional Scandinavian saunas, pools, and holistic wellness programs.",
  },
  {
    icon: Wifi,
    title: "Modern Amenities",
    description:
      "High-speed Wi-Fi, smart room controls, and seamless digital check-in.",
  },
  {
    icon: Car,
    title: "Concierge Service",
    description:
      "Personalized travel planning, airport transfers, and local experiences.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              The Experience
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Nordic design meets world-class hospitality
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Every MME hotel blends Scandinavian minimalism with warm
              hospitality. From our curated interiors to our seasonal menus, every
              detail is crafted for an unforgettable stay.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground">
                    <feature.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/hotel-room.jpg"
                alt="Luxurious hotel room with Nordic design"
                width={400}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-8 overflow-hidden rounded-lg">
              <Image
                src="/images/restaurant.jpg"
                alt="Fine dining restaurant interior"
                width={400}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
