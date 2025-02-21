import React, { useState, useEffect } from "react";
import {
  Input,
  SelectPicker,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
} from "rsuite";
import { useUpdatePropertyWherePropertyIdMutation } from "src/graphql/generated/graphql";

export default function EditProperty({ propertyDetails , reload }: any) {
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

  const { mutate: updateProperty } = useUpdatePropertyWherePropertyIdMutation({
    onSuccess(){
        reload()
    }
  });

  const propertyTypes = [
    { label: "Apartment", value: "apartment" },
    { label: "House", value: "house" },
    { label: "Condo", value: "condo" },
    { label: "Villa", value: "villa" },
  ];

  const amenitiesList = [
    "WiFi",
    "Parking",
    "Pool",
    "Air Conditioning",
    "Gym",
    "Air conditioner",
  ];

  const handleChange = (field: any, value: any) => {
    setProperty((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: any) => {
    setProperty((prev) => ({
      ...prev,
      images: e.target.files,
    }));
  };

  const SavePropertyChanges = () => {
    try {
      updateProperty({
        name: property?.name,
        amenities: property?.amenities,
        type: property?.type,
        per: property?.rentalType,
        cost: property?.price,
        beds: property?.bedrooms,
        bath: property?.bathrooms,
        description: property?.description,
        image: property?.images,
        property_id: propertyDetails?.property_id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <label className="block text-sm font-medium text-gray-700">
        Property Name
      </label>
      <Input
        value={property.name}
        onChange={(value) => handleChange("name", value)}
        placeholder="Enter property name"
        className="mb-3"
      />

      <label className="block text-sm font-medium text-gray-700">
        Property Type
      </label>
      <SelectPicker
        data={propertyTypes}
        value={property.type}
        onChange={(value) => handleChange("type", value)}
        placeholder="Select type"
        className="mb-3 w-full"
      />

      <label className="block text-sm font-medium text-gray-700">
        Location
      </label>
      <Input
        value={property.location}
        onChange={(value) => handleChange("location", value)}
        placeholder="Enter address"
        className="mb-3"
      />

      <label className="block text-sm font-medium text-gray-700">
        Rental Type
      </label>
      <RadioGroup
        name="rentalType"
        inline
        value={property.rentalType}
        onChange={(value) => handleChange("rentalType", value)}
        className="mb-3"
      >
        <Radio value="perNight">Per Night</Radio>
        <Radio value="perMonth">Per Month</Radio>
      </RadioGroup>

      <label className="block text-sm font-medium text-gray-700">
        Price ({property.rentalType === "perNight" ? "Per Night" : "Per Month"})
        ($)
      </label>
      <Input
        type="number"
        value={property.price}
        onChange={(value) => handleChange("price", value)}
        placeholder={`Enter price ${
          property.rentalType === "perNight" ? "per night" : "per month"
        }`}
        className="mb-3"
      />

      <div className="flex gap-3">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Bedrooms
          </label>
          <Input
            type="number"
            value={property.bedrooms}
            onChange={(value) => handleChange("bedrooms", value)}
            placeholder="Enter number"
            className="mb-3"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Bathrooms
          </label>
          <Input
            type="number"
            value={property.bathrooms}
            onChange={(value) => handleChange("bathrooms", value)}
            placeholder="Enter number"
            className="mb-3"
          />
        </div>
      </div>

      <label className="block text-sm font-medium text-gray-700">
        Description
      </label>
      <Input
        as="textarea"
        rows={4}
        value={property.description}
        onChange={(value) => handleChange("description", value)}
        placeholder="Enter a brief description of the property"
        className="mb-3"
      />

      <label className="block text-sm font-medium text-gray-700">
        Amenities
      </label>
      <CheckboxGroup
        inline
        name="amenities"
        value={property.amenities}
        onChange={(value) => handleChange("amenities", value)}
      >
        {amenitiesList.map((amenity) => (
          <Checkbox key={amenity} value={amenity}>
            {amenity}
          </Checkbox>
        ))}
      </CheckboxGroup>

      <label className="mt-3 block text-sm font-medium text-gray-700">
        Upload Images
      </label>
      <input
        type="file"
        multiple
        accept="image/*"
        className="mb-3 w-full border p-2"
        onChange={handleFileChange}
      />
      {/* Booking Button */}
      <div className="bg-white p-4">
        <button
          onClick={SavePropertyChanges}
          className="w-full rounded-lg bg-black py-3 text-white hover:bg-gray-800"
        >
          Save Changes
        </button>
      </div>
    </>
  );
}
