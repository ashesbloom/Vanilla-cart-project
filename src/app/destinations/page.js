import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Filter, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getImagePath } from "@/lib/getImagePath";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DestinationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-gradient-to-r from-teal-500 to-cyan-600">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={getImagePath("/destinations-bg.webp")}
            alt="World destinations"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative h-full flex flex-col justify-center items-center px-4 md:px-10 py-12 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4">
            Explore Our Destinations
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Discover amazing places around the world and start planning your
            next adventure
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="px-4 md:px-10">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-md:w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search destinations..."
                className="pl-10"
              />
            </div>
            <div className="flex max-md:flex-wrap gap-4 w-full md:w-auto">
              <Select>
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="asia">Asia</SelectItem>
                  <SelectItem value="americas">Americas</SelectItem>
                  <SelectItem value="africa">Africa</SelectItem>
                  <SelectItem value="oceania">Oceania</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Trip Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="beach">Beach</SelectItem>
                  <SelectItem value="city">City Break</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Duration</SelectItem>
                  <SelectItem value="short">1-3 Days</SelectItem>
                  <SelectItem value="medium">4-7 Days</SelectItem>
                  <SelectItem value="long">8-14 Days</SelectItem>
                  <SelectItem value="extended">15+ Days</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 bg-gray-50">
        <div className="px-4 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allDestinations.map((destination, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow p-0"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={getImagePath(destination.image) || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-sm font-medium text-teal-700 flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                    {destination.rating}
                  </div>
                  {destination.popular && (
                    <div className="absolute top-2 left-2 bg-teal-600 text-white px-2 py-1 rounded text-xs font-medium">
                      Popular
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">{destination.name}</h3>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{destination.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {destination.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm">
                        {destination.duration}
                      </p>
                      <p className="font-bold text-teal-600">
                        ${destination.price}{" "}
                        <span className="text-sm font-normal text-gray-500">
                          per person
                        </span>
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-md cursor-pointer"
              >
                1
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-md cursor-pointer"
              >
                2
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-md cursor-pointer"
              >
                3
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-md cursor-pointer"
              >
                ...
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-md cursor-pointer"
              >
                10
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Regions */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold  text-gray-900 mb-4">
              Explore by Region
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover amazing destinations across different parts of the world
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <Link href={`/destinations?region=${region.id}`} key={index}>
                <div className="relative h-64 rounded-xl overflow-hidden group">
                  <Image
                    src={region.image || "/placeholder.svg"}
                    alt={region.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {region.name}
                      </h3>
                      <p className="text-white/90">
                        {region.count} Destinations
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-50">
        <div className="px-4 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold  text-gray-900 mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our travel experts can create a custom itinerary tailored to your
              preferences and budget.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-teal-600 cursor-pointer text-base hover:bg-teal-700"
              >
                Request Custom Itinerary
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample data
const allDestinations = [
  {
    name: "Santorini",
    location: "Greece",
    image: "/santorini.jpg",
    rating: 4.9,
    duration: "7 Days / 6 Nights",
    price: 1299,
    popular: true,
    description:
      "Experience the stunning white-washed buildings and blue domes overlooking the Aegean Sea in this iconic Greek island.",
  },
  {
    name: "Bali",
    location: "Indonesia",
    image: "/bali.webp",
    rating: 4.8,
    duration: "10 Days / 9 Nights",
    price: 1499,
    popular: true,
    description:
      "Discover tropical beaches, lush rice terraces, and spiritual temples in the Island of the Gods.",
  },
  {
    name: "Maldives",
    location: "Indian Ocean",
    image: "/maldives.jpg",
    rating: 4.9,
    duration: "5 Days / 4 Nights",
    price: 1899,
    popular: false,
    description:
      "Relax in overwater bungalows and swim in crystal clear turquoise waters in this tropical paradise.",
  },
  {
    name: "Paris",
    location: "France",
    image: "/paris.jpg",
    rating: 4.7,
    duration: "6 Days / 5 Nights",
    price: 1199,
    popular: true,
    description:
      "Explore the City of Light with its iconic Eiffel Tower, world-class museums, and charming cafés.",
  },
  {
    name: "Tokyo",
    location: "Japan",
    image: "/tokyo.jpg",
    rating: 4.8,
    duration: "8 Days / 7 Nights",
    price: 1699,
    popular: false,
    description:
      "Experience the perfect blend of traditional culture and futuristic technology in Japan's vibrant capital.",
  },
  {
    name: "Machu Picchu",
    location: "Peru",
    image: "/machu-picchu.jpg",
    rating: 4.9,
    duration: "9 Days / 8 Nights",
    price: 1599,
    popular: false,
    description:
      "Hike to the ancient Incan citadel set high in the Andes Mountains for a truly unforgettable experience.",
  },
  {
    name: "Barcelona",
    location: "Spain",
    image: "/barcelona.jpg",
    rating: 4.7,
    duration: "5 Days / 4 Nights",
    price: 999,
    popular: false,
    description:
      "Enjoy Gaudí's architectural masterpieces, Mediterranean beaches, and vibrant street life.",
  },
  {
    name: "Cape Town",
    location: "South Africa",
    image: "/cape-town.jpg",
    rating: 4.8,
    duration: "8 Days / 7 Nights",
    price: 1399,
    popular: false,
    description:
      "Discover stunning landscapes from Table Mountain to Cape Point, along with vibrant culture and wildlife.",
  },
];

const regions = [
  {
    id: "europe",
    name: "Europe",
    count: 45,
    image: "/europe.jpg",
  },
  {
    id: "asia",
    name: "Asia",
    count: 38,
    image: "/asia.jpg",
  },
  {
    id: "americas",
    name: "Americas",
    count: 32,
    image: "/america.jpg",
  },
  {
    id: "africa",
    name: "Africa",
    count: 24,
    image: "/africa.png",
  },
  {
    id: "oceania",
    name: "Oceania",
    count: 18,
    image: "/oceania.jpg",
  },
  {
    id: "middle-east",
    name: "Middle East",
    count: 15,
    image: "/middle-east.webp",
  },
];
