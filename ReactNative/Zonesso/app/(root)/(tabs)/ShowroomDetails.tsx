import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Link } from "expo-router"; // Import Link for navigation

const actualcarwash = require("../../../assets/images/actualcarwash.png");
const casrwashcartton = require("../../../assets/images/casrwashcartton.png");
const companyLogo = require("../../../assets/images/ToyotaLogo.png");
const carwashdetails = require("../../../assets/images/carwashdetails.png");

const services = {
  Dubai: [
    {
      name: "Service 1",
      logo: companyLogo,
      image: actualcarwash,
      distance: "1.2 km",
      price: "AED 150",
      details:
        "Special Discounted Offer For Ceramic Coating & Interior Detailing With Steam At Home.",
      location: "Deira, Dubai, United Arab Emirates",
      postedOn: "14/3/24",
      postedBy: "A Car Wash & Detailing",
    },
    {
      name: "Service 2",
      logo: companyLogo,
      image: casrwashcartton,
      distance: "2.5 km",
      price: "AED 200",
      details: "Full Car Wash and Waxing.",
      location: "Al Barsha, Dubai, United Arab Emirates",
      postedOn: "15/3/24",
      postedBy: "B Car Wash & Detailing",
    },
    {
      name: "Service 3",
      logo: companyLogo,
      image: actualcarwash,
      distance: "3.0 km",
      price: "AED 180",
      details: "Interior and Exterior Detailing.",
      location: "Jumeirah, Dubai, United Arab Emirates",
      postedOn: "16/3/24",
      postedBy: "C Car Wash & Detailing",
    },
  ],
  Sharjah: [
    {
      name: "Service 1",
      logo: companyLogo,
      image: casrwashcartton,
      distance: "1.8 km",
      price: "AED 140",
      details: "Basic Car Wash.",
      location: "Al Nahda, Sharjah, United Arab Emirates",
      postedOn: "17/3/24",
      postedBy: "D Car Wash & Detailing",
    },
    {
      name: "Service 2",
      logo: companyLogo,
      image: casrwashcartton,
      distance: "2.3 km",
      price: "AED 160",
      details: "Full Car Wash and Polishing.",
      location: "Al Majaz, Sharjah, United Arab Emirates",
      postedOn: "18/3/24",
      postedBy: "E Car Wash & Detailing",
    },
    {
      name: "Service 3",
      logo: companyLogo,
      image: casrwashcartton,
      distance: "2.7 km",
      price: "AED 170",
      details: "Interior Detailing.",
      location: "Al Qasimia, Sharjah, United Arab Emirates",
      postedOn: "19/3/24",
      postedBy: "F Car Wash & Detailing",
    },
  ],
  AbuDhabi: [
    {
      name: "Service 1",
      logo: companyLogo,
      image: actualcarwash,
      distance: "1.0 km",
      price: "AED 130",
      details: "Basic Car Wash.",
      location: "Al Khalidiyah, Abu Dhabi, United Arab Emirates",
      postedOn: "20/3/24",
      postedBy: "G Car Wash & Detailing",
    },
    {
      name: "Service 2",
      logo: companyLogo,
      image: casrwashcartton,
      distance: "1.5 km",
      price: "AED 150",
      details: "Full Car Wash and Waxing.",
      location: "Al Zahiyah, Abu Dhabi, United Arab Emirates",
      postedOn: "21/3/24",
      postedBy: "H Car Wash & Detailing",
    },
    {
      name: "Service 3",
      logo: companyLogo,
      image: carwashdetails,
      distance: "2.0 km",
      price: "AED 160",
      details: "Interior and Exterior Detailing.",
      location: "Al Reem Island, Abu Dhabi, United Arab Emirates",
      postedOn: "22/3/24",
      postedBy: "I Car Wash & Detailing",
    },
  ],
};

const ShowroomDetails = () => {
  const [selectedLocation, setSelectedLocation] = useState("Dubai");
  const [showDropdown, setShowDropdown] = useState(false);
  const cities = ["Dubai", "Sharjah", "AbuDhabi"];
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchInputRef = useRef(null);

  useEffect(() => {
    const hideSearch = () => {
      setSearchActive(false);
      setSearchText("");
    };

    if (searchActive) {
      const hideListener = Keyboard.addListener("keyboardDidHide", hideSearch);
      return () => hideListener.remove();
    }
  }, [searchActive]);

  const handleSearchInput = (text) => {
    setSearchText(text);
  };

  const handleOutsidePress = () => {
    setSearchActive(false);
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <ScrollView className="bg-gray-100">
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,
          }}
        >
          <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {selectedLocation}
            </Text>
          </TouchableOpacity>
          {searchActive ? (
            <TextInput
              style={{
                flex: 1,
                marginLeft: 8,
                padding: 8,
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 4,
              }}
              placeholder="Search..."
              value={searchText}
              onChangeText={handleSearchInput}
              autoFocus
              ref={searchInputRef}
            />
          ) : (
            <View className="flex-row">
              <TouchableOpacity onPress={() => setSearchActive(true)}>
                <Icon name="search" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 16 }}>
                <Icon name="filter" size={24} color="black" />
              </TouchableOpacity>
            </View>
          )}
        </View>
        {showDropdown && (
          <View
            style={{
              position: "absolute",
              top: 56,
              left: 16,
              backgroundColor: "white",
              borderRadius: 4,
              elevation: 5,
              zIndex: 10,
            }}
          >
            {cities.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedLocation(item);
                  setShowDropdown(false);
                }}
              >
                <Text style={{ padding: 8 }}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <Text style={{ paddingHorizontal: 16, color: "gray" }}>
          Showing {services[selectedLocation]?.length || 0} results in{" "}
          {selectedLocation}
        </Text>
        <View style={{ padding: 16 }}>
          {(services[selectedLocation] || []).map((service, index) => (
            <Link
              href={{
                pathname: "/(root)/(tabs)/Compprofile", // Correct route for the service detail page
                params: {
                  image: service.image,
                  name: service.name,
                  price: service.price,
                  details: service.details,
                  location: service.location,
                  postedOn: service.postedOn,
                  postedBy: service.postedBy,
                },
              }}
              key={index}
              asChild
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  shadowRadius: 10,
                  borderRadius: 8,
                  marginBottom: 16,
                }}
              >
                <View style={{ padding: 16 }}>
                  <Image
                    source={service.image}
                    style={{
                      width: "100%",
                      height: 350,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    }}
                    resizeMode="cover"
                  />
                  <View
                    style={{
                      position: "absolute",
                      top: 20,
                      left: 20,
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      paddingHorizontal: 8,
                      paddingVertical: 4,
                      borderRadius: 4,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Featured
                    </Text>
                  </View>
                </View>
                <View style={{ padding: 16 }}>
                  <Text
                    style={{ color: "red", fontWeight: "bold", fontSize: 20 }}
                  >
                    {service.price}
                  </Text>
                  <Text style={{ color: "gray", marginTop: 8 }}>
                    {service.details}
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: 8 }} className="">
                    <View style={{ width: 60 }}>
                      <Image
                        source={service.logo}
                        style={{ width: "100%", height: 60 }}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={{ marginLeft: 16 }}>
                      <Text style={{ color: "gray" }}>{service.location}</Text>
                      <Text style={{ color: "gray" }}>
                        Posted on: {service.postedOn}
                      </Text>
                      <Text style={{ color: "gray" }}>
                        Posted By: {service.postedBy}
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row justify-around w-full mx-1 py-7 pb-4">
                    <TouchableOpacity className="rounded-lg border border-red-500 py-4 px-4 w-[49%]">
                      <Text className="text-red-500 font-bold text-center text-xl">
                        Chat
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="rounded-lg border border-red-500 py-4 px-4 w-[49%] bg-red-500">
                      <Text className="text-white font-bold text-center text-xl">
                        Call
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default ShowroomDetails;
