import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="px-4 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Wanderlust Travel
            </h3>
            <p className="mb-4 text-gray-400">
              Making your travel dreams come true since 2005. Explore the world
              with confidence and create unforgettable memories.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-teal-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-teal-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="text-gray-400 hover:text-teal-400"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-gray-400 hover:text-teal-400"
                >
                  Travel Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-teal-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-teal-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  123 Travel Street, Cityville, Country, 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-gray-400">1-800-TRAVEL</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-gray-400">info@wanderlusttravel.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter for travel tips and exclusive offers.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="w-full bg-teal-600 hover:bg-teal-700 cursor-pointer">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Wanderlust Travel. All rights
            reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-teal-400 text-sm"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-teal-400 text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
