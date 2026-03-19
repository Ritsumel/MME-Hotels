import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    city: 'Stockholm',
    description: "Our flagship location in the heart of Sweden's capital",
    image: '/images/stockholm.jpg',
    rooms: 124,
  },
  {
    city: 'Gothenburg',
    description: 'Coastal charm meets Nordic elegance on the west coast',
    image: '/images/gothenburg.jpg',
    rooms: 86,
  },
  {
    city: 'Malmo',
    description: "Southern Sweden's gateway with modern Scandinavian design",
    image: '/images/malmo.jpg',
    rooms: 72,
  },
  {
    city: 'Uppsala',
    description:
      'Historic university town with a contemporary hospitality touch',
    image: '/images/uppsala.jpg',
    rooms: 54,
  },
];

export function DestinationsGrid() {
  return (
    <section className='mx-auto max-w-7xl px-6 py-24'>
      <div className='mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.2em] text-accent'>
            Our Locations
          </p>
          <h2 className='mt-2 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance'>
            Discover Sweden with MME Hotels
          </h2>
        </div>
        <Link
          href='/booking'
          className='flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent'
        >
          View all destinations
          <ArrowRight className='h-4 w-4' />
        </Link>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {destinations.map((dest) => (
          <Link
            key={dest.city}
            href={`/booking?city=${dest.city}`}
            className='group relative overflow-hidden rounded-lg'
          >
            <div className='aspect-3/4 overflow-hidden'>
              <Image
                src={dest.image}
                alt={`MME Hotels ${dest.city} location`}
                width={400}
                height={533}
                className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
            </div>
            <div className='absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent' />
            <div className='absolute bottom-0 left-0 right-0 p-5'>
              <p className='text-xs font-medium uppercase tracking-wider text-primary-foreground/60'>
                {dest.rooms} rooms
              </p>
              <h3 className='mt-1 font-serif text-xl font-bold text-primary-foreground'>
                {dest.city}
              </h3>
              <p className='mt-1 text-sm leading-relaxed text-primary-foreground/70'>
                {dest.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
