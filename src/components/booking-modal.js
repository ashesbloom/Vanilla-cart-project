"use client";

import { useState } from "react";
import { X, Loader2, CheckCircle, AlertCircle, Calendar, Users } from "lucide-react";
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

export default function BookingModal({ isOpen, onClose, packageName, destination }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: destination || "",
    packageName: packageName || "",
    travelDate: "",
    travelers: "2",
    budget: "",
    specialNotes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: data.message });
        // Reset form after success
        setTimeout(() => {
          onClose();
          setStatus(null);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            destination: destination || "",
            packageName: packageName || "",
            travelDate: "",
            travelers: "2",
            budget: "",
            specialNotes: "",
          });
        }, 2000);
      } else {
        setStatus({ type: "error", message: data.error });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div 
        className="bg-white rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Booking Inquiry</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="h-5 w-5" />
          </button>
        </div>

        {packageName && (
          <div className="mb-4 p-3 bg-teal-50 rounded-lg">
            <p className="text-sm text-teal-700">
              <strong>Package:</strong> {packageName}
            </p>
            {destination && (
              <p className="text-sm text-teal-700">
                <strong>Destination:</strong> {destination}
              </p>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">First Name *</label>
              <Input
                id="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">Last Name *</label>
              <Input
                id="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email *</label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">Phone</label>
            <Input
              id="phone"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          {!destination && (
            <div className="space-y-2">
              <label htmlFor="destination" className="text-sm font-medium">Destination *</label>
              <Input
                id="destination"
                placeholder="e.g., Greece, Bali, Japan"
                value={formData.destination}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="travelDate" className="text-sm font-medium">Travel Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="travelDate"
                  type="date"
                  className="pl-10"
                  value={formData.travelDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Travelers</label>
              <Select value={formData.travelers} onValueChange={(v) => handleSelectChange("travelers", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Person</SelectItem>
                  <SelectItem value="2">2 People</SelectItem>
                  <SelectItem value="3">3 People</SelectItem>
                  <SelectItem value="4">4 People</SelectItem>
                  <SelectItem value="5">5+ People</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Budget Range</label>
            <Select value={formData.budget} onValueChange={(v) => handleSelectChange("budget", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="economy">Economy ($500 - $1,500)</SelectItem>
                <SelectItem value="standard">Standard ($1,500 - $3,000)</SelectItem>
                <SelectItem value="premium">Premium ($3,000 - $5,000)</SelectItem>
                <SelectItem value="luxury">Luxury ($5,000+)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="specialNotes" className="text-sm font-medium">Special Requests</label>
            <Textarea
              id="specialNotes"
              placeholder="Any special requirements or requests..."
              rows={3}
              value={formData.specialNotes}
              onChange={handleInputChange}
            />
          </div>

          {status && (
            <div className={`p-3 rounded-lg flex items-center gap-2 ${status.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
              {status.type === "success" ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              {status.message}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Inquiry"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
