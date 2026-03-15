# 🏨 MME Hotels

A full-stack hotel booking system where users can browse and book hotels across cities in Sweden.

Built as a group project for the **Backend Development 2** course.

---

## 🛠 Tech Stack

| Frontend | Backend | Database |
|--------|--------|--------|
| Next.js | ASP.NET Core Web API | SQL Server (LocalDB) |
| React | C# | |
| TypeScript | Entity Framework Core | |
| Tailwind / CSS | Scalar (API documentation) | |

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Ritsumel/MME-Hotels.git
cd HotelBookingApp
```

### 2️⃣ Run the backend

```bash
cd backend/HotelBookingApp.Api
dotnet run
```

API runs on:
http://localhost:8000

API documentation:
http://localhost:8000/scalar

### 3️⃣ Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: 
http://localhost:3000

---

## 🗄 Database Setup

This project uses **SQL Server LocalDB** with **Entity Framework Core migrations**.

After cloning the repository, create the database by running the following command inside the backend project:

```powershell
Update-Database
```

This will automatically create the database: MMEHotelsDb

---

## 📌 Notes

- Backend uses Entity Framework Core Code-First migrations
- API documentation is generated automatically with Scalar
- The frontend communicates with the API using the environment variable:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```
configured in `.env.local`.

---

## 📡 API Endpoints

The backend exposes a REST API for managing hotels and cities.

---

### 🏨 Hotels

Get all hotels:

```http
GET /api/hotels
```
Returns a list of all hotels.

Get hotel by ID:
```http
GET /api/hotels/{id}
```
Returns a single hotel by its ID.

Get hotel by URL slug:
```http
GET /api/hotels?slug={slug}
```
Returns a hotel matching the given URL slug.

Create a new hotel:
```http
POST /api/hotels
```
Creates a new hotel entry in the database.

Update a hotel:
```http
PATCH /api/hotels/{id}
```
Updates existing hotel information.

Delete a hotel:
```http
DELETE /api/hotels/{id}
```
Removes a hotel from the database.

---

### 🌆 Cities

Get all cities:
```http
GET /api/cities
```
Returns a list of all cities.

Get city by ID:
```http
GET /api/cities/{id}
```
Returns a single city by its ID.

Get city by URL slug:
```http
GET /api/cities?slug={slug}
```
Returns a city matching the given URL slug.

Create a new city:
```http
POST /api/cities
```
Creates a new city.

Update a city:
```http
PATCH /api/cities/{id}
```
Updates city information.

Delete a city:
```http
DELETE /api/cities/{id}
```
Deletes a city from the database.

---

## 👥 Team Members

- [Michelle Lee](https://github.com/ritsumel)
- [Martin Johansson](https://github.com/mfjohnsson)
- [Elisa Brenet](https://github.com/elisabrenet)
