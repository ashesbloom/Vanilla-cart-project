import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl font-bold  text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Have questions or ready to plan your next adventure? Our travel
                experts are here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600">
                      1-800-TRAVEL (1-800-872-835)
                    </p>
                    <p className="text-gray-600">
                      International: +1 234 567 8900
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@wanderlusttravel.com</p>
                    <p className="text-gray-600">
                      support@wanderlusttravel.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Main Office</h3>
                    <p className="text-gray-600">123 Travel Street</p>
                    <p className="text-gray-600">Cityville, Country, 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="+1 (555) 000-0000" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiry-type" className="text-sm font-medium">
                    Inquiry Type
                  </label>
                  <Select>
                    <SelectTrigger id="inquiry-type">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="booking">New Booking</SelectItem>
                      <SelectItem value="existing">Existing Booking</SelectItem>
                      <SelectItem value="custom">Custom Itinerary</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your travel plans or questions..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-base cursor-pointer py-6"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className=" px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold  text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit one of our offices around the world
            </p>
          </div>
          <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
            <div className="h-full w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30766738.48171446!2d60.9691763862997!3d19.725163578221917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1746880287802!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">{office.city}</h3>
                <p className="text-gray-600 mb-2">{office.address}</p>
                <p className="text-gray-600">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample data
const offices = [
  {
    city: "New York",
    address: "123 Broadway, New York, NY 10001, USA",
    phone: "+1 (212) 555-1234",
  },
  {
    city: "London",
    address: "45 Oxford Street, London, W1D 2DZ, UK",
    phone: "+44 20 7123 4567",
  },
  {
    city: "Singapore",
    address: "78 Orchard Road, Singapore 238839",
    phone: "+65 6123 4567",
  },
];

const faqs = [
  {
    question: "How do I book a trip?",
    answer:
      "You can book a trip through our website by selecting your desired destination and following the booking process, or you can contact our travel experts directly by phone or email for personalized assistance.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and in some locations, we offer payment plans.",
  },
  {
    question: "Can I customize my travel package?",
    answer:
      "We specialize in creating custom itineraries tailored to your preferences, budget, and schedule. Contact our team to start planning your personalized journey.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our cancellation policy varies depending on the destination and package. Generally, cancellations made 60+ days before departure receive a full refund minus a small administrative fee. Please refer to the specific terms for your booking or contact us for details.",
  },
  {
    question: "Do you offer travel insurance?",
    answer:
      "Yes, we offer comprehensive travel insurance options to protect your trip investment. We strongly recommend purchasing travel insurance for all international trips.",
  },
];
