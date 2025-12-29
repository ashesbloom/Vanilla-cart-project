import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Star, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { getImagePath } from "@/lib/getImagePath";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] bg-gradient-to-r from-teal-500 to-cyan-600">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={getImagePath("/hero-bg.jpg")}
            alt="Tropical beach destination"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className=" relative h-full flex flex-col justify-center items-center text-center px-4 md:px-6 py-12 space-y-6 text-white">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold ">
              Discover the World&apos;s Most Amazing Places
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Find and book your perfect getaway with our curated selection of
              stunning destinations
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-base cursor-pointer text-teal-600 hover:bg-white/90 group"
            >
              Explore Destinations
              <ArrowRight className="group-hover:translate-x-1 transition-all ease-in-out duration-200 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-teal-600 border-none text-base cursor-pointer"
            >
              View Special Offers
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8">
        <div className="px-4 md:px-6">
          <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg -mt-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Destination</label>
                <div className="flex border rounded-md p-2">
                  <MapPin className="h-5 w-5 text-teal-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Date</label>
                <div className="flex border rounded-md p-2">
                  <input type="date" className="w-full outline-none" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Travelers</label>
                <div className="flex border rounded-md p-2">
                  <Users className="h-5 w-5 text-teal-500 mr-2" />
                  <select className="w-full outline-none bg-transparent">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>2 Adults, 1 Child</option>
                    <option>2 Adults, 2 Children</option>
                  </select>
                </div>
              </div>
            </div>
            <Button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-base cursor-pointer py-6">
              Search Trips
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold  text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Explore our handpicked selection of stunning locations around the
              globe
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
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
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="font-bold text-xl text-white">
                          {destination.name}
                        </h3>
                        <div className="flex items-center text-white/90">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">
                            {destination.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center bg-white/90 px-2 py-1 rounded text-sm font-medium text-teal-700">
                        <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                        {destination.rating}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
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
            <Link href="/destinations">
              <Button
                variant="outline"
                size="lg"
                className="border-teal-600 cursor-pointer text-teal-600 hover:bg-teal-50"
              >
                View All Destinations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className=" px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold  text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              We&apos;re dedicated to making your travel dreams come true with
              exceptional service and unforgettable experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50"
              >
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-teal-50">
        <div className=" px-4 md:px-10">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold  text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Hear from our satisfied customers about their amazing travel
              experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        {testimonial.destination}
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

      {/* Newsletter */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-teal-700 to-cyan-800 text-white">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent"></div>

        <div className="px-4 md:px-10 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-4 ">
              Get Travel Inspiration & Exclusive Offers
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Subscribe to our newsletter for insider tips, new destinations,
              and unbeatable deals.
            </p>

            <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full h-11 bg-white text-gray-900 placeholder:text-gray-500"
              />
              <Button
                type="submit"
                className="w-full sm:w-auto text-base bg-white text-teal-700 hover:bg-white/90 cursor-pointer h-full"
              >
                <Mail className="w-5 h-5" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample data
const destinations = [
  {
    name: "Santorini",
    location: "Greece",
    image: "/santorini.jpg",
    rating: 4.9,
    duration: "7 Days / 6 Nights",
    price: 1299,
  },
  {
    name: "Bali",
    location: "Indonesia",
    image: "/bali.webp",
    rating: 4.8,
    duration: "10 Days / 9 Nights",
    price: 1499,
  },
  {
    name: "Maldives",
    location: "Indian Ocean",
    image: "/maldives.jpg",
    rating: 4.9,
    duration: "5 Days / 4 Nights",
    price: 1899,
  },
  {
    name: "Paris",
    location: "France",
    image: "/paris.jpg",
    rating: 4.7,
    duration: "6 Days / 5 Nights",
    price: 1199,
  },
  {
    name: "Tokyo",
    location: "Japan",
    image: "/tokyo.jpg",
    rating: 4.8,
    duration: "8 Days / 7 Nights",
    price: 1699,
  },
  {
    name: "Machu Picchu",
    location: "Peru",
    image: "/machu-picchu.jpg",
    rating: 4.9,
    duration: "9 Days / 8 Nights",
    price: 1599,
  },
];

const features = [
  {
    title: "Handpicked Destinations",
    description:
      "Our travel experts personally select and vet each destination to ensure exceptional quality and experiences.",
    icon: Star,
  },
  {
    title: "Best Price Guarantee",
    description:
      "We promise the best rates and will match any lower price you find for the same trip elsewhere.",
    icon: function Icon({ className }) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    },
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available around the clock to assist you before, during, and after your trip.",
    icon: function Icon({ className = "" }) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    },
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    destination: "Santorini, Greece",
    avatar: "/user1.jpg",
    rating: 5,
    comment:
      "Our trip to Santorini was absolutely magical! The accommodations were perfect, and the itinerary allowed us to experience everything we wanted. Will definitely book with them again!",
  },
  {
    name: "Michael Chen",
    destination: "Tokyo, Japan",
    avatar: "/user2.jpg",
    rating: 5,
    comment:
      "The attention to detail was impressive. Our guide was knowledgeable and friendly, making our Tokyo experience unforgettable. Highly recommend their services!",
  },
  {
    name: "Emma Rodriguez",
    destination: "Bali, Indonesia",
    avatar: "/user3.jpg",
    rating: 4,
    comment:
      "Beautiful accommodations and excellent service throughout our stay in Bali. The only reason for 4 stars is that one excursion was canceled, but they quickly arranged an alternative.",
  },
];
