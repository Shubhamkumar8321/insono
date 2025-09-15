"use client"
import { useState } from "react"
import Navigation from "@/components/Navigation"
import BlogSection from "@/components/BlogSection";
import ProductCard from "@/components/ProductCard"
import FAQ from "@/components/FAQ"
import HeroSection from "@/components/HeroSection"
import HearingaidType from "@/components/HearingaidType"
import Footer from "@/components/Footer"
const categories = [
  "Signia",
  "Phonak",
  "Rechargeable",
  "Bluetooth",
  "Invisible",
  "Affordable",
]

const products = [
  {
    title: "Signia Active Pro",
    description: "Advanced SEO tool for better rankings.",
    price: "$29.99",
    imageUrl: "/products/signia active pro.png",
    category: "Signia",
  },
  {
    title: "Signia KIT",
    description: "Plan and manage all your content in one place.",
    price: "$49.99",
    imageUrl: "/products/signia kit.png",
    category: "Signia",
  },
  {
    title: "Signia Hearing Aids",
    description: "Optimize and track all your ad campaigns.",
    price: "$59.99",
    imageUrl: "/products/singia insio.png",
    category: "Signia",
  },
  {
    title: "Signia Insio",
    description: "Boost your local visibility with smart tools.",
    price: "$19.99",
    imageUrl: "/products/singia insio.png",
    category: "Local",
  },
]

export default function HomePage() {
  // ✅ declare activeCategory state
  const [activeCategory, setActiveCategory] = useState("Signia")

  // ✅ filter products based on activeCategory
  const filteredProducts = products.filter(
    (product) => activeCategory === "Signia" || product.category === activeCategory
  )

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-b from-[#eaf5ff] to-white flex flex-col items-center justify-center text-center px-6">
        <Navigation />

        
          
              <HeroSection />
         
          
       
      </section>

      {/* Products Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-md font-medium transition ${
                activeCategory === category
  ? "bg-[#C6E2FF] text-black shadow"
  : "bg-[#E7F3FF] text-black hover:bg-[#C6E2FF] hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                size="EU38"
                color="Black/White"
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found in this category.
            </p>
          )}
        </div>
      </section>

<HearingaidType/>

<BlogSection />


      {/* FAQ Section */}
      
        
          <FAQ />
      

      {/* Footer */}
      <Footer/>
    </main>
  )
}
