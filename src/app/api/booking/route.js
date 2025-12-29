import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      destination,
      packageName,
      travelDate,
      travelers,
      budget,
      specialNotes,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !destination) {
      return NextResponse.json(
        { error: "Missing required fields (firstName, lastName, email, destination)" },
        { status: 400 }
      );
    }

    // Create booking inquiry in database
    const booking = await prisma.bookingInquiry.create({
      data: {
        firstName,
        lastName,
        email,
        phone: phone || null,
        destination,
        packageName: packageName || null,
        travelDate: travelDate || null,
        travelers: travelers ? parseInt(travelers) : 1,
        budget: budget || null,
        specialNotes: specialNotes || null,
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Booking inquiry submitted successfully! We'll contact you within 24 hours.", 
        id: booking.id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json(
      { error: "Failed to submit booking inquiry. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const bookings = await prisma.bookingInquiry.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}
