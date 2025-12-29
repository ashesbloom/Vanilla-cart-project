"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Star, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getImagePath } from "@/lib/getImagePath";
import BookingModal from "@/components/booking-modal";

export default function PackageCardSmall({ pkg }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow p-0">
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
