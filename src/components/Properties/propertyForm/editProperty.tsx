import React, { useState, useEffect } from "react";
import { Input, SelectPicker, RadioGroup, Radio, CheckboxGroup, Checkbox } from "rsuite";

export default function EditProperty({ propertyDetails }: any) {
  const [property, setProperty] = useState({
    name: "",
    type: "",
    location: "",
    rentalType: "perNight", // Default selection
    price: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
    amenities: [] as any,
    images: null,
  });

  // Populate form with existing property details when component mounts
  useEffect(() => {
    if (propertyDetails) {
      setProperty({
        name: propertyDetails?.name || "",
        type: propertyDetails?.type || "",
        location: propertyDetails?.location || "",
        rentalType: propertyDetails?.per || "perNight",
        price: propertyDetails?.cost || "",
        bedrooms: propertyDetails?.beds || "",
        bathrooms: propertyDetails?.bath || "",
        description: propertyDetails?.description || "",
        amenities: propertyDetails?.amenities || [],
        images: propertyDetails?.image || null,
      });
    }
  }, [propertyDetails]);

  const propertyTypes = [
    { label: "Apartment", value: "apartment" },
    { label: "House", value: "house" },
    { label: "Condo", value: "condo" },
    { label: "Villa", value: "villa" },
  ];

  const amenitiesList = ["WiFi", "Parking", "Pool", "Air Conditioning", "Gym", "Air conditioner"];

  const handleChange = (field: any, value: any) => {
    setProperty((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: any) => {
    setProperty((prev) => ({
      ...prev,
      images: e.target.files,
    }));
  };

  return (
    <>
      {/* Property Name */}
      <label className="block text-sm font-medium text-gray-700">Property Name</label>
      <Input value={property.name} onChange={(value) => handleChange("name", value)} placeholder="Enter property name" className="mb-3" />

      {/* Property Type */}
      <label className="block text-sm font-medium text-gray-700">Property Type</label>
      <SelectPicker
        data={propertyTypes}
        value={property.type}
        onChange={(value) => handleChange("type", value)}
        placeholder="Select type"
        className="mb-3 w-full"
      />

      {/* Location */}
      <label className="block text-sm font-medium text-gray-700">Location</label>
      <Input value={property.location} onChange={(value) => handleChange("location", value)} placeholder="Enter address" className="mb-3" />

      {/* Rental Type Selection */}
      <label className="block text-sm font-medium text-gray-700">Rental Type</label>
      <RadioGroup name="rentalType" inline value={property.rentalType} onChange={(value) => handleChange("rentalType", value)} className="mb-3">
        <Radio value="perNight">Per Night</Radio>
        <Radio value="perMonth">Per Month</Radio>
      </RadioGroup>

      {/* Dynamic Price Input */}
      <label className="block text-sm font-medium text-gray-700">
        Price ({property.rentalType === "perNight" ? "Per Night" : "Per Month"}) ($)
      </label>
      <Input
        type="number"
        value={property.price}
        onChange={(value) => handleChange("price", value)}
        placeholder={`Enter price ${property.rentalType === "perNight" ? "per night" : "per month"}`}
        className="mb-3"
      />

      {/* Bedrooms & Bathrooms */}
      <div className="flex gap-3">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
          <Input type="number" value={property.bedrooms} onChange={(value) => handleChange("bedrooms", value)} placeholder="Enter number" className="mb-3" />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
          <Input type="number" value={property.bathrooms} onChange={(value) => handleChange("bathrooms", value)} placeholder="Enter number" className="mb-3" />
        </div>
      </div>

      {/* Description Input (Multiline) */}
      <label className="block text-sm font-medium text-gray-700">Description</label>
      <Input
        as="textarea"
        rows={4}
        value={property.description}
        onChange={(value) => handleChange("description", value)}
        placeholder="Enter a brief description of the property"
        className="mb-3"
      />

      {/* Amenities */}
      <label className="block text-sm font-medium text-gray-700">Amenities</label>
      <CheckboxGroup inline name="amenities" value={property.amenities} onChange={(value) => handleChange("amenities", value)}>
        {amenitiesList.map((amenity) => (
          <Checkbox key={amenity} value={amenity}>
            {amenity}
          </Checkbox>
        ))}
      </CheckboxGroup>

      {/* Image Upload */}
      <label className="block text-sm font-medium text-gray-700 mt-3">Upload Images</label>
      <input type="file" multiple accept="image/*" className="mb-3 border p-2 w-full" onChange={handleFileChange} />
           {/* Booking Button */}
           <div className="bg-white p-4">
          <button className="w-full rounded-lg bg-black py-3 text-white hover:bg-gray-800">
            Save Changes
          </button>
        </div>
    </>
  );
}
