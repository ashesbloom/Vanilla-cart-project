import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, Globe, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getImagePath } from "@/lib/getImagePath";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-gradient-to-r from-teal-500 to-cyan-600">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={getImagePath("/travel-team-bg.avif")}
            alt="Team of travel experts"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative h-full flex flex-col justify-center items-center px-4 md:px-10 py-12 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4">
            About Wanderlust Travel
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            We&apos;re passionate about creating unforgettable travel
            experiences for our clients
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2005, Wanderlust Travel began with a simple
                  mission: to help people experience the world&apos;s most
                  amazing destinations with ease, comfort, and authenticity.
                </p>
                <p>
                  What started as a small team of passionate travelers has grown
                  into a global company with offices in 12 countries, serving
                  thousands of happy travelers each year.
                </p>
                <p>
                  Despite our growth, we&apos;ve never lost sight of what
                  matters most - creating personalized travel experiences that
                  transform lives and create lasting memories.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-4xl font-bold text-teal-600">15+</p>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-4xl font-bold text-teal-600">100+</p>
                  <p className="text-gray-600">Destinations</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-4xl font-bold text-teal-600">50k+</p>
                  <p className="text-gray-600">Happy Travelers</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-4xl font-bold text-teal-600">12</p>
                  <p className="text-gray-600">Global Offices</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src={getImagePath("/travel-team-action.webp")}
                alt="Our team in action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate travel experts dedicated to creating your perfect
              journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 w-full mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={member.photo || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-teal-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-50">
        <div className="px-4 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us help you plan the trip of a lifetime. Our travel experts
              are ready to create your perfect itinerary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-base cursor-pointer"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/destinations">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 cursor-pointer text-base"
                >
                  Explore Destinations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample data
const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our service, from planning to execution.",
    icon: Award,
  },
  {
    title: "Customer Focus",
    description:
      "Your satisfaction is our top priority. We listen to your needs and exceed your expectations.",
    icon: Users,
  },
  {
    title: "Sustainability",
    description:
      "We're committed to responsible travel that respects local cultures and protects the environment.",
    icon: Globe,
  },
  {
    title: "Innovation",
    description:
      "We constantly seek new ways to enhance your travel experience with innovative solutions.",
    icon: Clock,
  },
];

const team = [
  {
    name: "Emily Chen",
    role: "Founder & CEO",
    photo: "/user1.jpg",
    bio: "With over 20 years of travel industry experience, Emily founded Wanderlust to share her passion for exploration.",
  },
  {
    name: "David Rodriguez",
    role: "Head of Operations",
    photo: "/user4.avif",
    bio: "David ensures that every trip runs smoothly, with meticulous attention to logistics and customer satisfaction.",
  },
  {
    name: "Sarah Johnson",
    role: "Destination Expert - Asia",
    photo: "/user3.jpg",
    bio: "Having lived in 5 Asian countries, Sarah brings authentic local knowledge to our Asian travel packages.",
  },
  {
    name: "Michael Okonkwo",
    role: "Destination Expert - Africa",
    photo: "/user2.jpg",
    bio: "Born and raised in Kenya, Michael specializes in creating authentic African safari experiences.",
  },
];
