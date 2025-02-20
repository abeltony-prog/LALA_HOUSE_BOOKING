import React, { useState } from "react";
import {
  Drawer,
  Button,
  Input,
  SelectPicker,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
} from "rsuite";
import { useAddNewPropertyMutation } from "src/graphql/generated/graphql";

export default function AddNewPropertyForm({ user }: any) {
  const [open, setOpen] = useState(false);
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
    images: "",
  });

  const { mutate: SaveNewProperty, isLoading } = useAddNewPropertyMutation({
    onSuccess() {
      setOpen(false);
    },
    onError(error) {
      console.log(error);
    },
  });

  const propertyTypes = [
    { label: "Apartment", value: "Apartment" },
    { label: "House", value: "Whole house" },
    { label: "Condo", value: "Condo" },
    { label: "Villa", value: "Villa" },
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
  const handleFile = (e: any) => {
    setProperty({
      ...property,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // console.log("New Property Data:", property);
    try {
      SaveNewProperty({
        name: property?.name,
        amenities: property?.amenities,
        type: property?.type,
        per: property?.rentalType,
        cost: property?.price,
        beds: property?.bedrooms,
        bath: property?.bathrooms,
        description: property?.description,
        image: property?.images,
        host_id: user?.hosts[0]?.HID,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Add Property Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-md bg-black px-2 py-1 text-sm text-white transition hover:bg-gray-800"
      >
        Add Property
      </button>

      {/* Drawer Form */}
      <Drawer open={open} onClose={() => setOpen(false)} size="sm">
        <Drawer.Header>
          <Drawer.Title>Add New Property</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          {/* Property Name */}
          <label className="block text-sm font-medium text-gray-700">
            Property Name
          </label>
          <Input
            value={property.name}
            onChange={(value) => handleChange("name", value)}
            placeholder="Enter property name"
            className="mb-3"
          />

          {/* Property Type */}
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

          {/* Location */}
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <Input
            value={property.location}
            onChange={(value) => handleChange("location", value)}
            placeholder="Enter address"
            className="mb-3"
          />

          {/* Rental Type Selection */}
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

          {/* Dynamic Price Input */}
          <label className="block text-sm font-medium text-gray-700">
            Price (
            {property.rentalType === "perNight" ? "Per Night" : "Per Month"})
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

          {/* Bedrooms & Bathrooms */}
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

          {/* Description Input (Multiline) */}
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

          {/* Amenities */}
          <label className="block text-sm  font-medium text-gray-700">
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

          {/* Image Upload */}
          <label className="mt-3 block text-sm font-medium text-gray-700">
            Upload Images
          </label>
          <input
            type="file"
            id="images"
            value={property?.images}
            className="mb-3 w-full border p-2"
            onChange={handleFile}
          />
          <div className="mt-4 flex gap-4">
            <button
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-md border border-black px-2 py-1 text-sm text-black transition hover:border-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="ml-auto flex items-center gap-2 rounded-md bg-black px-2 py-1 text-sm text-white transition hover:bg-gray-800"
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </div>
        </Drawer.Body>
      </Drawer>
    </>
  );
}
