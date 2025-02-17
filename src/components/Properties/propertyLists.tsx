import { ChevronDown } from "lucide-react";
import React from "react";
import Property from "./property";

export default function PropertyList() {
  return (
    <div className="flex-1 space-y-6 overflow-y-auto p-6">
      <div className="flex items-center justify-between">
        <span className="text-gray-600">497 properties</span>
        <button className="flex items-center gap-2 text-sm">
          Sort by newest
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Property Grid - 4 per row */}
      <div className="grid grid-cols-4 gap-6">
        {[
          {
            title: "Cozy Central Apartment",
            location: "El Camp d'En Grassot i Gracia Nova, Barcelona",
            price: "5,300",
            image:
              "https://m.economictimes.com/thumb/height-450,width-600,imgsize-22382,msid-111780228/which-mansion-tops-the-list-of-the-worlds-most-expensive-houses.jpg",
            beds: "1 bedroom",
            baths: "1 bath",
            area: "50 m²",
          },
          {
            title: "Duplex in La Plata",
            location: "El Camp d'En Grassot i Gracia Nova, Barcelona",
            price: "4,800",
            image:
              "https://img.jamesedition.com/listing_images/2023/11/01/14/48/19/8245a78e-4e0e-4a16-b338-8d80772120a0/je/507x312xc.jpg",
            beds: "1 bedroom",
            baths: "2 baths",
            area: "75 m²",
          },
          {
            title: "Modern Loft",
            location: "Gothic Quarter, Barcelona",
            price: "6,200",
            image:
              "https://img.jamesedition.com/listing_images/2023/11/01/14/48/19/8245a78e-4e0e-4a16-b338-8d80772120a0/je/507x312xc.jpg",
            beds: "2 bedrooms",
            baths: "2 baths",
            area: "90 m²",
          },
          {
            title: "Luxury Penthouse",
            location: "Eixample, Barcelona",
            price: "7,900",
            image:
              "https://img.jamesedition.com/listing_images/2023/11/01/14/48/19/8245a78e-4e0e-4a16-b338-8d80772120a0/je/507x312xc.jpg",
            beds: "3 bedrooms",
            baths: "3 baths",
            area: "120 m²",
          },
          {
            title: "Luxury Penthouse",
            location: "Eixample, Barcelona",
            price: "7,900",
            image:
              "https://img.jamesedition.com/listing_images/2023/11/01/14/48/19/8245a78e-4e0e-4a16-b338-8d80772120a0/je/507x312xc.jpg",
            beds: "3 bedrooms",
            baths: "3 baths",
            area: "120 m²",
          },
          {
            title: "Luxury Penthouse",
            location: "Eixample, Barcelona",
            price: "7,900",
            image:
              "https://img.jamesedition.com/listing_images/2023/11/01/14/48/19/8245a78e-4e0e-4a16-b338-8d80772120a0/je/507x312xc.jpg",
            beds: "3 bedrooms",
            baths: "3 baths",
            area: "120 m²",
          },
          {
            title: "Luxury Penthouse",
            location: "Eixample, Barcelona",
            price: "7,900",
            image:
              "https://img.jamesedition.com/listing_images/2023/11/01/14/48/19/8245a78e-4e0e-4a16-b338-8d80772120a0/je/507x312xc.jpg",
            beds: "3 bedrooms",
            baths: "3 baths",
            area: "120 m²",
          },
          {
            title: "Luxury Penthouse",
            location: "Eixample, Barcelona",
            price: "7,900",
            image:
              "https://img.jamesedition.com/listing_images/2023/11/01/14/48/19/8245a78e-4e0e-4a16-b338-8d80772120a0/je/507x312xc.jpg",
            beds: "3 bedrooms",
            baths: "3 baths",
            area: "120 m²",
          },
          
        ].map((property) => (
       <Property property={property} />
        ))}
      </div>
    </div>
  );
}
