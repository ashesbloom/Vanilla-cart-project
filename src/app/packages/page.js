import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Calendar, Users, Clock, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getImagePath } from "@/lib/getImagePath";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function PackagesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-gradient-to-r from-teal-500 to-cyan-600">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={getImagePath("/travel-package.jpg")}
            alt="Travel packages"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className=" relative h-full flex flex-col justify-center items-center px-4 md:px-10 py-12 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4">
            Travel Packages
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Expertly curated travel experiences for every type of adventurer
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className=" px-4 md:px-10">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex gap-4 w-full justify-center max-md:flex-wrap">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Destinations</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="asia">Asia</SelectItem>
                  <SelectItem value="americas">Americas</SelectItem>
                  <SelectItem value="africa">Africa</SelectItem>
                  <SelectItem value="oceania">Oceania</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full">
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

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Budget</SelectItem>
                  <SelectItem value="economy">Economy</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Travel Style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Styles</SelectItem>
                  <SelectItem value="beach">Beach</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                  <SelectItem value="romantic">Romantic</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-teal-600 hover:bg-teal-700">
                Search Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-12 bg-gray-50">
        <div className="px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold  text-gray-900 mb-4">
              Featured Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Our most popular travel experiences, handpicked for exceptional
              value and unforgettable memories
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow p-0"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={getImagePath(pkg.image) || "/placeholder.svg"}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                  {pkg.discount && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                      {pkg.discount}% OFF
                    </div>
                  )}
                  {pkg.tag && (
                    <div className="absolute top-2 left-2 bg-teal-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {pkg.tag}
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">{pkg.name}</h3>
                    <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-sm font-medium text-teal-700">
                      <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                      {pkg.rating}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="h-4 w-4 mr-1 text-teal-600" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="h-4 w-4 mr-1 text-teal-600" />
                      {pkg.groupSize}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="h-4 w-4 mr-1 text-teal-600" />
                      {pkg.season}
                    </div>
                  </div>
                  <ul className="mb-4 space-y-1">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-end">
                    <div>
                      {pkg.originalPrice && (
                        <p className="text-gray-500 text-sm line-through">
                          ${pkg.originalPrice}
                        </p>
                      )}
                      <p className="font-bold text-teal-600 text-xl">
                        ${pkg.price}{" "}
                        <span className="text-sm font-normal text-gray-500">
                          per person
                        </span>
                      </p>
                    </div>
                    <Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Categories */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold  text-gray-900 mb-4">
              Explore by Travel Style
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Find the perfect package that matches your travel preferences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelStyles.map((style, index) => (
              <Link href={`/packages?style=${style.id}`} key={index}>
                <div className="relative h-64 rounded-xl overflow-hidden group">
                  <Image
                    src={getImagePath(style.image) || "/placeholder.svg"}
                    alt={style.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {style.name}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {style.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Packages */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold  text-gray-900 mb-4">
              All Travel Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Browse our complete collection of expertly crafted travel
              experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPackages.map((pkg, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow p-0"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={getImagePath(pkg.image) || "/placeholder.svg"}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                  {pkg.tag && (
                    <Badge className="absolute top-2 left-2 bg-teal-600 hover:bg-teal-700">
                      {pkg.tag}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{pkg.name}</h3>
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                      <span>{pkg.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3 text-xs text-gray-600">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {pkg.groupSize}
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="font-bold text-teal-600">
                      ${pkg.price}{" "}
                      <span className="text-xs font-normal text-gray-500">
                        per person
                      </span>
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-teal-600 cursor-pointer text-teal-600 hover:bg-teal-50"
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
                8
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-teal-50">
        <div className="px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Real experiences from travelers who booked our packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={getImagePath(testimonial.avatar) || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.package}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    &quot;{testimonial.comment}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="px-4 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Book Your Dream Vacation?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our travel experts are ready to help you plan the perfect trip
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-white/90 text-base cursor-pointer"
              >
                Browse All Packages
              </Button>
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-white/90 text-base cursor-pointer"
              >
                Contact a Travel Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample data
const featuredPackages = [
  {
    name: "Greek Islands Explorer",
    location: "Greece",
    image: "/santorini.jpg",
    rating: 4.9,
    duration: "10 Days",
    groupSize: "Max 12 People",
    season: "Apr-Oct",
    price: 2499,
    originalPrice: 2999,
    discount: 15,
    tag: "Best Seller",
    highlights: [
      "Visit Athens, Mykonos, and Santorini",
      "Private sunset cruise in Santorini",
      "Guided tour of ancient ruins",
      "Island hopping by ferry",
    ],
  },
  {
    name: "Japan Cultural Journey",
    location: "Japan",
    image: "/japan-cultural.jpg",
    rating: 4.8,
    duration: "12 Days",
    groupSize: "Max 10 People",
    season: "Year Round",
    price: 3299,
    tag: "Cultural",
    highlights: [
      "Tokyo, Kyoto, and Osaka exploration",
      "Traditional tea ceremony experience",
      "Mt. Fuji day trip",
      "Stay in a traditional ryokan",
    ],
  },
  {
    name: "Costa Rica Adventure",
    location: "Costa Rica",
    image: "/costa-rica-adventure.jpg",
    rating: 4.9,
    duration: "8 Days",
    groupSize: "Max 14 People",
    season: "Dec-Apr",
    price: 1899,
    originalPrice: 2199,
    discount: 10,
    tag: "Adventure",
    highlights: [
      "Arenal Volcano National Park",
      "Zip-lining through cloud forests",
      "Wildlife spotting in Manuel Antonio",
      "White water rafting experience",
    ],
  },
];

const travelStyles = [
  {
    id: "adventure",
    name: "Adventure",
    description: "For thrill-seekers and active travelers",
    image: "/adventure.jpg",
  },
  {
    id: "beach",
    name: "Beach & Relaxation",
    description: "Unwind on the world's most beautiful shores",
    image: "/beach.jpg",
  },
  {
    id: "cultural",
    name: "Cultural Immersion",
    description: "Deep dive into local traditions and history",
    image: "/cultural.jpg",
  },
  {
    id: "luxury",
    name: "Luxury Escapes",
    description: "Premium experiences with exceptional service",
    image: "/luxury.jpg",
  },
  {
    id: "family",
    name: "Family Friendly",
    description: "Fun and educational for all ages",
    image: "/family.jpg",
  },
  {
    id: "honeymoon",
    name: "Honeymoon",
    description: "Romantic getaways for newlyweds",
    image: "/honeymoon.jpg",
  },
  {
    id: "wildlife",
    name: "Wildlife & Nature",
    description: "Explore natural wonders and ecosystems",
    image: "/wildlife.jpg",
  },
  {
    id: "food",
    name: "Food & Wine",
    description: "Culinary journeys for food enthusiasts",
    image: "/food-wine.jpg",
  },
];

const allPackages = [
  {
    name: "Italian Highlights",
    location: "Italy",
    image: "/italian.webp",
    rating: 4.7,
    duration: "9 Days",
    groupSize: "Max 16",
    price: 2199,
    tag: "Popular",
  },
  {
    name: "Thailand Explorer",
    location: "Thailand",
    image: "/thailand.jpg",
    rating: 4.8,
    duration: "11 Days",
    groupSize: "Max 12",
    price: 1799,
  },
  {
    name: "Peruvian Andes Trek",
    location: "Peru",
    image: "/peruvian-andes.jpg",
    rating: 4.9,
    duration: "10 Days",
    groupSize: "Max 10",
    price: 2399,
    tag: "Adventure",
  },
  {
    name: "Moroccan Magic",
    location: "Morocco",
    image: "/moroccan.png",
    rating: 4.7,
    duration: "8 Days",
    groupSize: "Max 14",
    price: 1599,
  },
  {
    name: "Australian Outback",
    location: "Australia",
    image: "/australian.png",
    rating: 4.8,
    duration: "12 Days",
    groupSize: "Max 12",
    price: 3299,
    tag: "Nature",
  },
  {
    name: "South African Safari",
    location: "South Africa",
    image: "/african-safari.jpg",
    rating: 4.9,
    duration: "10 Days",
    groupSize: "Max 8",
    price: 3599,
    tag: "Wildlife",
  },
  {
    name: "Vietnam & Cambodia",
    location: "Southeast Asia",
    image: "/vietnam-and-cambodia.jpg",
    rating: 4.8,
    duration: "14 Days",
    groupSize: "Max 12",
    price: 2299,
  },
  {
    name: "Icelandic Adventure",
    location: "Iceland",
    image: "/iceland-adventure.webp",
    rating: 4.8,
    duration: "7 Days",
    groupSize: "Max 10",
    price: 2799,
    tag: "Nature",
  },
  {
    name: "Egyptian Wonders",
    location: "Egypt",
    image: "/egytian.webp",
    rating: 4.7,
    duration: "9 Days",
    groupSize: "Max 16",
    price: 1999,
    tag: "Historical",
  },
];

const testimonials = [
  {
    name: "James Wilson",
    package: "Greek Islands Explorer",
    avatar: "/user2.jpg",
    rating: 5,
    comment:
      "The Greek Islands package exceeded all our expectations. The private sunset cruise in Santorini was absolutely magical and something we'll remember forever.",
  },
  {
    name: "Aiko Tanaka",
    package: "Japan Cultural Journey",
    avatar: "/user1.jpg",
    rating: 5,
    comment:
      "As someone of Japanese heritage, I was impressed by the authenticity of the cultural experiences. The ryokan stay was a highlight and our guide was exceptional.",
  },
  {
    name: "Carlos Mendez",
    package: "Costa Rica Adventure",
    avatar: "/user3.jpg",
    rating: 4,
    comment:
      "Great adventure package with the perfect mix of activities and relaxation. Zip-lining through the cloud forest was incredible! Only giving 4 stars because one of the hotels wasn't as nice as expected.",
  },
];
