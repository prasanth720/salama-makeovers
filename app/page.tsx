"use client"

import { useState } from "react"
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { GalleryImage } from "@/components/gallary-image"


const galleryImages = [
  {
    id: 1,
    src: "/assets/13.jpg",
    alt: "Bridal Makeup Look",
      title: "Salama Makeup",
  
    category: "Bridal",
  },
  {
    id: 2,
    src: "/assets/10.jpg",
    alt: "Evening Glam Makeup",
    title: "Evening Glam",
    category: "Evening",
  },
  {
    id: 3,
    src: "/assets/1.jpg",
    alt: "Natural Day Makeup",
    title: "Natural Day Look",
    category: "Natural",
  },
  {
    id: 4,
    src: "/assets/4.jpg",
    alt: "Party Makeup Look",
    title: "Nice Hair Style",
    category: "Party",
  },
  {
    id: 5,
    src: "/assets/5.jpg",
    alt: "Professional Makeup",
    title: "Nice Hair Style",
    category: "Professional",
  },
  {
    id: 6,
    src: "/assets/6.jpg",
    alt: "Creative Artistic Makeup",
    title: "Bridal Marriage Look",
    category: "Bridal",
  },
  {
    id: 7,
    src: "/assets/7.jpg",
    alt: "Creative Artistic Makeup",
    title: "Nice Hair Style",
    category: "Professional",
  },
  {
    id: 8,
    src: "/assets/8.jpg",
    alt: "Creative Artistic Makeup",
    title: "Cute Girl Photography",
    category: "Party",
  },
  {
    id: 9,
    src: "/assets/3.jpg",
    alt: "Creative Artistic Makeup",
    title: "Nice Hair Style",
    category: "Creative",
  },
  {
    id: 10,
    src: "/assets/2.jpg",
    alt: "Creative Artistic Makeup",
    title: "Decent Makeup",
    category: "Creative",
  },
  {
    id: 11,
    src: "/assets/11.jpg",
    alt: "Creative Artistic Makeup",
    title: "Nice Hair Style",
    category: "Bridal",
  },
  {
    id: 12,
    src: "/assets/12.jpg",
    alt: "Creative Artistic Makeup",
    title: "Cute Expression",
    category: "Party",
  },
  {
    id: 13,
    src: "/assets/9.jpg",
    alt: "Creative Artistic Makeup",
     title: "Elegant Bridal Makeup",
    category: "Creative",
  },
]

const services = [
  {
    title: "Bridal Makeup",
    description: "Complete bridal makeup package for your special day",
    price: "From $150",
  },
  {
    title: "Event Makeup",
    description: "Professional makeup for parties and special events",
    price: "From $80",
  },
  {
    title: "Photoshoot Makeup",
    description: "Camera-ready makeup for professional photoshoots",
    price: "From $100",
  },
  {
    title: "Makeup Lessons",
    description: "Learn professional makeup techniques",
    price: "From $60",
  },
]

export default function SalamaMakeupApp() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "Bridal", "Evening", "Natural", "Party", "Professional", "Creative"]

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((image) => image.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Salama Makeup
                </h1>
                <p className="text-sm text-gray-600">Professional Makeup Artist</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">
                Home
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-pink-600 transition-colors">
                Gallery
              </a>
              <a href="#services" className="text-gray-700 hover:text-pink-600 transition-colors">
                Services
              </a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">
                Contact
              </a>
            </nav>
            <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600">
              Book Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
              Beauty Redefined
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Transform your look with professional makeup artistry. From bridal elegance to everyday glamour, I create
              stunning looks that enhance your natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-lg px-8 py-3"
              >
                View Gallery
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pink-300 text-pink-600 hover:bg-pink-50 text-lg px-8 py-3 bg-transparent"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Makeup Gallery
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore my portfolio of stunning makeup transformations
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                    : "border-pink-300 text-pink-600 hover:bg-pink-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Desktop Carousel */}
          <div className="hidden md:block">
            <Carousel className="w-full max-w-6xl mx-auto">
              <CarouselContent className="-ml-2 md:-ml-4">
                {filteredImages.map((image) => (
                  <CarouselItem key={image.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-0">
                        <GalleryImage src={image.src} alt={image.alt} title={image.title} category={image.category} />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex" />
              <CarouselNext className="hidden lg:flex" />
            </Carousel>
          </div>

          {/* Mobile Grid */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredImages.map((image) => (
              <Card key={image.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <GalleryImage src={image.src} alt={image.alt} title={image.title} category={image.category} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Services
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional makeup services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-pink-100">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                    {service.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your look? Let's create something beautiful together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Phone className="w-8 h-8 mx-auto mb-4 text-pink-600" />
              <h4 className="font-semibold mb-2">Phone</h4>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Mail className="w-8 h-8 mx-auto mb-4 text-pink-600" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-gray-600">hello@salamamakeup.com</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-pink-600" />
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-gray-600">New York, NY</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-lg px-8 py-3"
            >
              Book Your Session
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Salama Makeup
              </h4>
              <p className="text-gray-400 mt-2">Professional Makeup Artist</p>
            </div>

            <div className="flex space-x-6">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-pink-400">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-pink-400">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-pink-400">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Salama Makeup. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
