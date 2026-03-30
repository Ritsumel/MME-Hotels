export interface Hotel {
  id: number;
  name: string;
  cityName: string;
  address: string;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  pricePerNight: number;
  amenities: string;
  urlSlug: string;
}

export interface City {
  id: number;
  name: string;
  image: string;
  urlSlug: string;
}

export async function getHotels(): Promise<Hotel[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hotels`);
  if (!res.ok) throw new Error('Failed to fetch hotels');
  return res.json();
}

export async function getHotelById(id: number): Promise<Hotel> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/hotels/${id}`,
  );
  if (!res.ok) throw new Error('Failed to fetch hotel');
  return res.json();
}

export async function getCities(): Promise<City[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cities`);
  if (!res.ok) throw new Error('Failed to fetch cities');
  return res.json();
}

// CRUD (förutom GET)
export interface CreateCityPayload {
  name: string;
  image: string;
  urlSlug: string;
}

export interface UpdateCityPayload {
  name: string;
  image: string;
  urlSlug: string;
}

export interface CreateHotelPayload {
  name: string;
  description: string;
  pricePerNight: number;
  image: string;
  urlSlug: string;
  address: string;
  rating: number;
  reviewCount: number;
  amenities: string;
  cityId: number;
}

export interface UpdateHotelPayload {
  name: string;
  description: string;
  pricePerNight: number;
  image: string;
  urlSlug: string;
  address: string;
  rating: number;
  reviewCount: number;
  amenities: string;
  cityId: number;
}

export async function createCity(payload: CreateCityPayload): Promise<City> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
}

export async function updateCity(id: number, payload: UpdateCityPayload): Promise<City> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cities/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
}

export async function deleteCity(id: number): Promise<void> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cities/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }
}

export async function createHotel(payload: CreateHotelPayload): Promise<Hotel> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hotels`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
}

export async function updateHotel(id: number, payload: UpdateHotelPayload): Promise<Hotel> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hotels/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
}

export async function deleteHotel(id: number): Promise<void> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hotels/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }
}