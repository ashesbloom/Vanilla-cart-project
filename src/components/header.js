"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "About Us", path: "/about" },
    { name: "Packages", path: "/packages" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="flex h-16 items-center justify-between px-4 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-teal-600">Wanderlust</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`text-base font-medium transition-colors hover:text-teal-600 ${
                pathname === route.path ? "text-teal-600" : "text-gray-600"
              }`}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-teal-600" />
            <span className="text-sm font-medium">1-800-TRAVEL</span>
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer text-base">
            Book Now
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] ">
            <nav className="flex flex-col gap-4 mt-8 px-5">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`text-lg font-medium transition-colors hover:text-teal-600 ${
                    pathname === route.path ? "text-teal-600" : "text-gray-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.name}
                </Link>
              ))}
              <Button className="mt-4 bg-teal-600 hover:bg-teal-700">
                Book Now
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
