"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  Award,
  CheckCircle,
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function CruxDetailingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  type ServiceName =
    | "Starter Package"
    | "Gold Package"
    | "VIP Package"
    | "Starter Coating - 1 Year"
    | "Gold Coating - 3 Years"
    | "VIP Coating - 5 Years"
    | "";

  const [selectedService, setSelectedService] = useState<ServiceName>("");

  const servicePricing: Record<Exclude<ServiceName, "">, string> = {
    "Starter Package": "$108",
    "Gold Package": "$168",
    "VIP Package": "$300",
    "Starter Coating - 1 Year": "$497",
    "Gold Coating - 3 Years": "$697",
    "VIP Coating - 5 Years": "$997",
  };

  const handleBookNow = (serviceName: ServiceName) => {
    setSelectedService(serviceName)
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleGetQuote = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }
  const handleWhatsAppContact = () => {
    const phoneNumber = "7786809858" // WhatsApp format without + or spaces
    const message = "Hi! I'm interested in your auto detailing services. Can you provide more information?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const serviceOptions = [
    { name: "Select a service...", price: "" },
    { name: "Starter Package", price: "$108" },
    { name: "Gold Package", price: "$168" },
    { name: "VIP Package", price: "$300" },
    { name: "Starter Coating - 1 Year", price: "$497" },
    { name: "Gold Coating - 3 Years", price: "$697" },
    { name: "VIP Coating - 5 Years", price: "$997" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-700 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
           <div className="flex items-center space-x-2">
  <Image
    src="/crux-logo.png"
    alt="Crux Detailing"
    width={160}   // pehle 120 tha, ab bada
    height={160}  // pehle 40 tha, ab bada
    className="h-16 w-16 rounded-full object-cover"
  />
</div>


            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>

            {/* Updated phone button to use silver gradient instead of blue */}
           <a
  href="tel:7786809858"
  className="hidden md:flex items-center bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white border border-gray-400 px-4 py-2 rounded-lg"
>
  <Phone className="w-4 h-4 mr-2" />
  778-680-9858
</a>


            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#home"
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#pricing"
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <div className="px-3 py-2">
                  {/* Updated mobile phone button to use silver gradient */}
                  <Button className="w-full bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white border border-gray-400">
                    <Phone className="w-4 h-4 mr-2" />
                    778-680-9858
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      {/* Improved hero section alignment and responsiveness */}
     <section
  id="home"
  className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden"
>
  {/* Dark gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10"></div>
  {/* Background image */}
  <div className="absolute inset-0 bg-[url('/luxury-black-car-with-glossy-finish-in-showroom.png')] bg-cover bg-center"></div>

  {/* Content */}
  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 flex flex-col items-center text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
      Premium Auto Detailing &
      <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-transparent">
        {" "}
        Ceramic Coating
      </span>
    </h1>

    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6">
      Across Vancouver & The Lower Mainland
    </p>

    {/* Badges */}
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 text-sm sm:text-base">
      <Badge className="bg-gray-800/80 text-gray-300 px-3 sm:px-4 py-2 border border-gray-600">
        <CheckCircle className="w-4 h-4 mr-2" />
        Mobile Service
      </Badge>
      <Badge className="bg-gray-800/80 text-gray-300 px-3 sm:px-4 py-2 border border-gray-600">
        <Shield className="w-4 h-4 mr-2" />
        Showroom Finish
      </Badge>
      <Badge className="bg-gray-800/80 text-gray-300 px-3 sm:px-4 py-2 border border-gray-600">
        <Award className="w-4 h-4 mr-2" />
        Backed by Warranty
      </Badge>
    </div>

    {/* CTA Button */}
    <Button
      onClick={handleGetQuote}
      size="lg"
      className="bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
    >
      Get Your Free Quote Today
    </Button>
  </div>
</section>


      {/* About Section */}
      {/* Updated about section background to silver gradient */}
      <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-gray-700 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">About Crux Detailing</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto text-pretty">
              At Crux Detailing, we don't just clean cars—we protect them. Serving Surrey, Burnaby, Coquitlam, Richmond,
              and Vancouver, we bring the detail shop to your driveway. Whether it's a simple refresh or a long-term
              ceramic coating, we pride ourselves on precision, premium products, and unmatched customer care.
            </p>
            {/* Added "Book a Service" CTA button in About section */}
            <div className="mt-8">
              <Button
                onClick={handleGetQuote}
                className="bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white px-8 py-3 text-lg font-semibold border border-gray-400 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book a Service
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Updated card icons to use silver gradient colors */}
            <Card className="bg-gray-800/50 border-gray-600 text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <CardTitle className="text-white">Mobile Convenience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">We come to you</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-600 text-center">
              <CardHeader>
                <Shield className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <CardTitle className="text-white">Premium Coatings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">With warranty protection</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-600 text-center">
              <CardHeader>
                <Award className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <CardTitle className="text-white">5+ Years Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Trusted detailing expertise</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-600 text-center">
              <CardHeader>
                <Star className="w-12 h-12 mx-auto text-red-500 mb-4" />
                <CardTitle className="text-white">40% Launch Promo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Limited time offer</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Updated transformation section background to silver gradient */}
     <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-800 to-gray-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
        See The Transformation
      </h2>
      <p className="text-lg sm:text-xl text-gray-300 text-pretty">
        Real results from our ceramic coating and detailing services
      </p>
    </div>

    {/* Grid of Before/After Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      
      {/* Ceramic Coating */}
      <Card className="bg-gray-800/50 border-gray-600 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-white text-center">Ceramic Coating Transformation</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-2">
            <div className="relative">
              <Image
                src="/dirty-car-with-swirl-marks-and-oxidized-paint-befo.png"
                alt="Before detailing - dirty car with swirl marks"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
                BEFORE
              </div>
            </div>
            <div className="relative">
              <Image
                src="/glossy-black-car-with-perfect-ceramic-coating-fini.png"
                alt="After ceramic coating - glossy showroom finish"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">
                AFTER
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interior Cleaning */}
      <Card className="bg-gray-800/50 border-gray-600 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-white text-center">Interior Deep Clean</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-2">
            <div className="relative">
              <Image
                src="/dirty-car-interior-with-stained-seats-and-dusty-da.png"
                alt="Before interior cleaning - stained and dirty"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
                BEFORE
              </div>
            </div>
            <div className="relative">
              <Image
                src="/pristine-clean-car-interior-with-spotless-leather-.png"
                alt="After interior detailing - pristine and clean"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">
                AFTER
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Headlight Restoration */}
      <Card className="bg-gray-800/50 border-gray-600 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-white text-center">Headlight Restoration</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-2">
            <div className="relative">
              <Image
                src="/dirty-car-with-swirl-marks-and-oxidized-paint-befo.png"
                alt="Before detailing - dirty car with swirl marks"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />              
              <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
                BEFORE
              </div>
            </div>
            <div className="relative">
              <Image
                src="/glossy-black-car-with-perfect-ceramic-coating-fini.png"
                alt="After ceramic coating - glossy showroom finish"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">
                AFTER
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
       

     

    </div>

    {/* Button */}
    <div className="text-center mt-10">
      <Button
                onClick={handleGetQuote}
                className="bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white px-8 py-3 text-lg font-semibold border border-gray-400 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book a Service
              </Button>
    </div>
  </div>
</section>

      {/* Services Section */}
      {/* Updated services section background to silver gradient */}
      <section id="services" className="py-16 sm:py-20 bg-gradient-to-b from-gray-700 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 text-pretty">
              Choose from our comprehensive detailing packages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Starter Package */}
            <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-600 text-white">40% OFF</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-white flex items-center">✨ Starter Package</CardTitle>
                <CardDescription className="text-gray-300">For a quick but thorough clean-up</CardDescription>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  $108 <span className="text-base sm:text-lg text-gray-400 line-through">$180</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                  Foam & pressure wash + hand wash
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                  Wheel & tire cleaning + shine
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                  Full vacuum (carpets, mats, seats, trunk)
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                  Interior wipe-down (dash, panels, vents)
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                  Window cleaning (inside & out)
                </div>
                <div className="flex items-center text-gray-400 pt-4 text-sm">
                  <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                  Avg Time: 1.5–2 hrs
                </div>
                <Button
                  onClick={() => handleBookNow("Starter Package")}
                  className="w-full mt-4 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white border border-gray-400"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>

            {/* Gold Package */}
            <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700 relative overflow-hidden border-2lg:col-span-1">
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-600 text-white">40% OFF</Badge>
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-yellow-600 text-white">POPULAR</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-white flex items-center">🥇 Gold Package</CardTitle>
                <CardDescription className="text-gray-300">
                  Deep clean inside & out, plus under the hood
                </CardDescription>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  $168 <span className="text-base sm:text-lg text-gray-400 line-through">$280</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-gray-300 mb-2 text-sm sm:text-base">Includes Starter +</div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                  Clay bar treatment
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                  Iron decontamination
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                  Steam cleaning (seats & carpets)
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                  Door jambs detailed
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                  Engine bay detail
                </div>
                <div className="flex items-center text-gray-400 pt-4 text-sm">
                  <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                  Avg Time: 3.5–4 hrs
                </div>
                <Button
                  onClick={() => handleBookNow("Gold Package")}
                  className="w-full mt-4 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white border border-gray-400"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>

            {/* VIP Package */}
            <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700 relative overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-600 text-white">40% OFF</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-white flex items-center">👑 VIP Package</CardTitle>
                <CardDescription className="text-gray-300">Showroom finish with premium extras</CardDescription>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  $300 <span className="text-base sm:text-lg text-gray-400 line-through">$500</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-gray-300 mb-2 text-sm sm:text-base">Includes Gold +</div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                  One-step polish (removes light scratches/swirls)
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                  Premium wax (~6 months protection)
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                  Leather conditioning
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                  Detailed brush work (vents, seams, tight spots)
                </div>
                <div className="flex items-center text-gray-400 pt-4 text-sm">
                  <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                  Avg Time: 5.5–6.5 hrs
                </div>
                <Button
                  onClick={() => handleBookNow("VIP Package")}
                  className="w-full mt-4 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white border border-gray-400"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Ceramic Coating Packages */}
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">🛡 Ceramic Coating Packages</h3>
            <p className="text-gray-300">Long-term protection with professional ceramic coatings</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-white">Starter Coating - 1 Year</CardTitle>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  $497 <span className="text-base sm:text-lg text-gray-400 line-through">$1300</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-300 text-sm">
                  Includes: Exterior detail, iron decontamination, clay bar, paint correction, polish, 1-Year Ceramic
                  Coating, mobile service, warranty.
                </p>
                <Button
                  onClick={() => handleBookNow("Starter Coating - 1 Year")}
                  className="w-full mt-4 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white border border-gray-400"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700 border-2 ">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-white">Gold Coating - 3 Years</CardTitle>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  $697 <span className="text-base sm:text-lg text-gray-400 line-through">$1300</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-300 text-sm">Everything from Starter + 3-Year Ceramic Coating with warranty.</p>
                <Button
                  onClick={() => handleBookNow("Gold Coating - 3 Years")}
                  className="w-full mt-4 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white border border-gray-400"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-white">VIP Coating - 5 Years</CardTitle>
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  $997 <span className="text-base sm:text-lg text-gray-400 line-through">$2000</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-300 text-sm">
                  Everything from Gold + Window coating, Rim coating, Interior detail, 5-Year Ceramic Coating with
                  warranty.
                </p>
                <Button
                  onClick={() => handleBookNow("VIP Coating - 5 Years")}
                  className="w-full mt-4 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white border border-gray-400"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Pricing Plans</h2>
            <p className="text-lg sm:text-xl text-gray-300 text-pretty">Compare our ceramic coating packages</p>
          </div>

          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-white font-bold">Package</TableHead>
                  <TableHead className="text-white font-bold">Regular Price</TableHead>
                  <TableHead className="text-white font-bold">Promo Price</TableHead>
                  <TableHead className="text-white font-bold">Duration</TableHead>
                  <TableHead className="text-white font-bold">Warranty</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white font-medium">Starter Coating</TableCell>
                  <TableCell className="text-gray-400 line-through">$1300</TableCell>
                  <TableCell className="text-green-400 font-bold">$497</TableCell>
                  <TableCell className="text-gray-300">1 Year</TableCell>
                  <TableCell className="text-green-400">✅</TableCell>
                </TableRow>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white font-medium">Gold Coating</TableCell>
                  <TableCell className="text-gray-400 line-through">$1300</TableCell>
                  <TableCell className="text-green-400 font-bold">$697</TableCell>
                  <TableCell className="text-gray-300">3 Years</TableCell>
                  <TableCell className="text-green-400">✅</TableCell>
                </TableRow>
                <TableRow className="border-gray-700">
                  <TableCell className="text-white font-medium">VIP Coating</TableCell>
                  <TableCell className="text-gray-400 line-through">$2000</TableCell>
                  <TableCell className="text-green-400 font-bold">$997</TableCell>
                  <TableCell className="text-gray-300">5 Years</TableCell>
                  <TableCell className="text-green-400">✅</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Book Your Detail Today!</h2>
            <p className="text-lg sm:text-xl text-gray-300 text-pretty">
              Ready to give your car the premium treatment it deserves?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Phone</h3>
                  <p className="text-gray-300">778-680-9858</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Email</h3>
                  <p className="text-gray-300 break-all">cruxdetailing.io@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Service Area</h3>
                  <p className="text-gray-300">Surrey • Burnaby • Coquitlam • Richmond • Vancouver</p>
                </div>
              </div>

              {/* Customer Review */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic text-sm sm:text-base">
                    "Best detail in Vancouver! My car looks brand new after their ceramic coating service."
                  </p>
                  <p className="text-gray-400 mt-2 text-sm">- Sarah M., Vancouver</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Get Your Free Quote</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" className="bg-gray-900 border-gray-600 text-white" />
                  <Input placeholder="Phone Number" className="bg-gray-900 border-gray-600 text-white" />
                </div>
                <Input placeholder="Email Address" className="bg-gray-900 border-gray-600 text-white" />

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Service Needed</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value as ServiceName)}
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={index === 0 ? "" : option.name} disabled={index === 0}>
                        {index === 0 ? option.name : `${option.name} - ${option.price}`}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedService && servicePricing[selectedService] && (
                  <div className="bg-gray-900 border border-gray-600 rounded-md p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Selected Service Price:</span>
                      <span className="text-green-400 font-bold text-lg">{servicePricing[selectedService]}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">40% promotional pricing included</p>
                  </div>
                )}

                <Textarea
                  placeholder="Additional details or special requests..."
                  className="bg-gray-900 border-gray-600 text-white min-h-[100px]"
                />
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Submit Quote Request</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/crux-logo.png" alt="Crux Detailing" width={120} height={40} className="h-8 w-auto" />
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                Premium mobile auto detailing and ceramic coating services across Vancouver and the Lower Mainland. We
                bring showroom-quality results to your driveway.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                  <Shield className="w-3 h-3 mr-1" />
                  Mobile Service
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                  <Award className="w-3 h-3 mr-1" />
                  Warranty
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Certified Products
                </Badge>
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                 <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    handleWhatsAppContact()
                  }}
                  className="text-gray-400 hover:text-green-400 transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                  aria-label="Contact us on WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Starter Package</li>
                <li>Gold Package</li>
                <li>VIP Package</li>
                <li>Ceramic Coating</li>
                <li>Paint Correction</li>
                <li>Interior Detailing</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  778-680-9858
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  cruxdetailing.io@gmail.com
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Surrey, Burnaby, Coquitlam, Richmond, Vancouver</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 sm:mb-0">
                &copy; 2024 Crux Detailing. All rights reserved. Premium auto detailing across Vancouver & Lower
                Mainland.
              </p>
              <div className="flex space-x-4 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
       <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsAppContact}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          aria-label="Contact us on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
          </svg>
        </Button>
      </div>
    </div>
  )
}
