"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Star, Calendar, Users, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getImagePath } from "@/lib/getImagePath";
import BookingModal from "@/components/booking-modal";

export default function PackageCard({ pkg }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow p-0">
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
            <Button 
              className="bg-teal-600 hover:bg-teal-700 cursor-pointer"
              onClick={() => setIsBookingOpen(true)}
            >
              Book Now
            </Button>
          </div>
        </CardContent>
      </Card>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        packageName={pkg.name}
        destination={pkg.location}
      />
    </>
  );
}
