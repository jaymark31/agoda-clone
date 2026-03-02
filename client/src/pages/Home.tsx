import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, MapPin, Users, Calendar, Plane, Home as HomeIcon, Activity, Car } from "lucide-react";

/**
 * Design Philosophy: Modern Travel-Focused Minimalism
 * - Clean, contemporary design emphasizing exploration and discovery
 * - Trust through clarity with strategic color hierarchy
 * - Destination cards inspire travel, not just facilitate booking
 * - Responsive elegance across all devices
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("hotels");
  const [checkInDate, setCheckInDate] = useState("11 Mar 2026");
  const [checkOutDate, setCheckOutDate] = useState("12 Mar 2026");
  const [guests, setGuests] = useState("2 adults");
  const [destination, setDestination] = useState("");

  const destinations = [
    { name: "Las Vegas (NV)", accommodations: "1,132 accommodations", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663313187697/GaqcEyY7cMmhS2yonhrhyL/destination-card-mountain-iuseJS2BFPSpAymiEZfow4.webp" },
    { name: "Los Angeles (CA)", accommodations: "4,481 accommodations", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663313187697/GaqcEyY7cMmhS2yonhrhyL/destination-card-temple-ne5Mmq9WFoTaAGXFpAe8yp.webp" },
    { name: "Dallas (TX)", accommodations: "1,813 accommodations", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663313187697/GaqcEyY7cMmhS2yonhrhyL/hero-city-skyline-ECyyWo3hmHweNBsg6KoFFi.webp" },
    { name: "New York (NY)", accommodations: "3,848 accommodations", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663313187697/GaqcEyY7cMmhS2yonhrhyL/destination-card-urban-ghYMLasCAjaR8YU6FEvHPg.webp" },
  ];

  const promotions = [
    { title: "DEALS here!", subtitle: "Save up to 50%", color: "from-purple-500 to-pink-500", image: null },
    { title: "Up to 20% off", subtitle: "Luxury hotels", color: "from-gray-800 to-gray-900", image: null },
    { title: "Summer Getaway", subtitle: "Beach resorts", color: "from-blue-400 to-teal-400", image: null },
  ];

  const internationalDestinations = [
    { name: "Kuala Lumpur", accommodations: "2,847 accommodations", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663313187697/GaqcEyY7cMmhS2yonhrhyL/destination-card-temple-ne5Mmq9WFoTaAGXFpAe8yp.webp" },
    { name: "Manila", accommodations: "1,223 accommodations", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663313187697/GaqcEyY7cMmhS2yonhrhyL/destination-card-urban-ghYMLasCAjaR8YU6FEvHPg.webp" },
    { name: "Jakarta", accommodations: "1,512 accommodations", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663313187697/GaqcEyY7cMmhS2yonhrhyL/hero-city-skyline-ECyyWo3hmHweNBsg6KoFFi.webp" },
    { name: "Bangkok", accommodations: "3,234 accommodations", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663313187697/GaqcEyY7cMmhS2yonhrhyL/destination-card-mountain-iuseJS2BFPSpAymiEZfow4.webp" },
  ];

  const properties = [
    { title: "Luxury Beachfront", subtitle: "Private villa with pool", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663313187697/GaqcEyY7cMmhS2yonhrhyL/hero-beach-destination-cLwxn8cjeCMnmhrfUPSnRr.webp" },
    { title: "Your stay, your way", subtitle: "Flexible cancellation", color: "from-purple-600 to-purple-800", image: null },
    { title: "Sunset Paradise", subtitle: "Beachfront resort", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663313187697/GaqcEyY7cMmhS2yonhrhyL/destination-card-mountain-iuseJS2BFPSpAymiEZfow4.webp" },
    { title: "Unforgettable Moments", subtitle: "Create memories", color: "from-red-600 to-red-800", image: null },
  ];

  return (
    <div className="min-h-screen bg-white font-body">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-display font-bold text-primary">agoda</div>
            <nav className="hidden md:flex gap-6">
              <button className="text-sm font-medium text-gray-700 hover:text-primary transition">Hotels & Homes</button>
              <button className="text-sm font-medium text-gray-700 hover:text-primary transition">Flights</button>
              <button className="text-sm font-medium text-gray-700 hover:text-primary transition">Activities</button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-primary hover:text-primary/80 transition">Sign in</button>
            <Button className="bg-primary hover:bg-primary/90 text-white">Create account</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663313187697/GaqcEyY7cMmhS2yonhrhyL/hero-beach-destination-cLwxn8cjeCMnmhrfUPSnRr.webp')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">SEE THE WORLD FOR LESS</h1>
        </div>
      </section>

      {/* Search Box */}
      <section className="relative -mt-24 z-20 mb-12">
        <div className="container">
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Tabs */}
            <div className="flex gap-6 mb-6 border-b border-gray-200">
              {[
                { id: "hotels", label: "Hotels", icon: HomeIcon },
                { id: "flights", label: "Flights", icon: Plane },
                { id: "activities", label: "Activities", icon: Activity },
                { id: "transfers", label: "Airport transfer", icon: Car },
              ].map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 pb-3 px-2 font-medium text-sm transition border-b-2 ${
                      activeTab === tab.id
                        ? "text-primary border-primary"
                        : "text-gray-600 border-transparent hover:text-gray-900"
                    }`}
                  >
                    <IconComponent size={18} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Search Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Destination */}
              <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:border-primary transition">
                <MapPin size={20} className="text-gray-400" />
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Enter a destination or property"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full outline-none text-sm"
                  />
                </div>
              </div>

              {/* Check-in */}
              <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:border-primary transition">
                <Calendar size={20} className="text-gray-400" />
                <div className="flex-1">
                  <div className="text-xs text-gray-500">Check-in</div>
                  <input
                    type="text"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full outline-none text-sm font-medium"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:border-primary transition">
                <Calendar size={20} className="text-gray-400" />
                <div className="flex-1">
                  <div className="text-xs text-gray-500">Check-out</div>
                  <input
                    type="text"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full outline-none text-sm font-medium"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:border-primary transition">
                <Users size={20} className="text-gray-400" />
                <div className="flex-1">
                  <div className="text-xs text-gray-500">Guests & rooms</div>
                  <input
                    type="text"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full outline-none text-sm font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Filters and Search Button */}
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="w-4 h-4 rounded" />
                  Free cancellation
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="w-4 h-4 rounded" />
                  Star rating 4+
                </label>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-2">
                SEARCH
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-display font-bold mb-8">Top destinations in the United States</h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {destinations.map((dest, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-display font-bold text-gray-900">{dest.name}</h3>
                    <p className="text-sm text-gray-600">{dest.accommodations}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Promotions */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-display font-bold">Accommodation Promotions</h2>
            <a href="#" className="text-primary font-medium hover:underline">View all →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {promotions.map((promo, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-6 text-white cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  promo.color ? `bg-gradient-to-br ${promo.color}` : "bg-gray-300"
                }`}
              >
                <div className="text-2xl font-display font-bold mb-2">{promo.title}</div>
                <p className="text-sm opacity-90">{promo.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flights & Activities Promotions */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-display font-bold mb-8">Flights & Activities Promotions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg p-8 text-white cursor-pointer hover:shadow-lg transition-all">
              <div className="text-2xl font-display font-bold mb-2">Save 5%*</div>
              <p className="text-sm opacity-90">on flight bookings</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg p-8 text-white cursor-pointer hover:shadow-lg transition-all">
              <div className="text-2xl font-display font-bold mb-2">Up to 5% off</div>
              <p className="text-sm opacity-90">on activities and tours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties We Think You'll Like */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-display font-bold mb-8">Properties we think you'll like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {properties.map((prop, idx) => (
              <div
                key={idx}
                className={`rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  prop.color ? `bg-gradient-to-br ${prop.color}` : ""
                }`}
              >
                {prop.image ? (
                  <div className="relative h-40 overflow-hidden bg-gray-200">
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className={`h-40 bg-gradient-to-br ${prop.color}`}></div>
                )}
                <div className={`p-4 ${prop.color ? "text-white" : "bg-white"}`}>
                  <h3 className="font-display font-bold">{prop.title}</h3>
                  <p className="text-sm opacity-90">{prop.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Outside US */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-display font-bold mb-8">Popular destinations outside United States</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {internationalDestinations.map((dest, idx) => (
              <div
                key={idx}
                className="group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-display font-bold text-gray-900">{dest.name}</h3>
                  <p className="text-sm text-gray-600">{dest.accommodations}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Save 10% on your 1st app booking!</h2>
          <p className="text-gray-600 mb-8">Just scan the QR code for instant savings</p>
          <div className="flex justify-center">
            <div className="w-32 h-32 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">QR Code</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-display font-bold text-white mb-4">Help</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Help center</a></li>
                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-white mb-4">Destinations</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Countries/Territories</a></li>
                <li><a href="#" className="hover:text-white transition">All Flight Routes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-white mb-4">Get the app</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">iOS app</a></li>
                <li><a href="#" className="hover:text-white transition">Android app</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-xs text-gray-400">
            <p>© 2026 Agoda Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
