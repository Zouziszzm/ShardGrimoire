import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  Linking,
  Keyboard,
} from "react-native";
import { Link } from "expo-router"; // Import Link for navigation

// Import your images
import HeaderImage1 from "../../../assets/images/actualcarwash.png";
import HeaderImage2 from "../../../assets/images/casrwashcartton.png";
import HeaderImage3 from "../../../assets/images/actualcarwash.png";
import Logo from "../../../assets/images/ToyotaLogo.png";
import ServiceImage from "../../../assets/images/carwashdetails.png";

const Compprofile = () => {
  const openDialer = () => {
    const phoneNumber = "tel:+1234567890";
    Linking.openURL(phoneNumber);
  };
  const [currentImage, setCurrentImage] = useState(0);
  const [tab, setTab] = useState("services");
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchInputRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false); // Track user interaction state

  const images = [HeaderImage1, HeaderImage2, HeaderImage3];

  // Update image automatically every 2 seconds unless interacting
  useEffect(() => {
    if (!isInteracting) {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isInteracting, images.length]);

  const handleSearchInput = (text: string) => {
    setSearchText(text);
  };

  const handleOutsidePress = () => {
    setSearchActive(false);
  };

  const handleSliderInteraction = () => {
    setIsInteracting(true);
    setTimeout(() => setIsInteracting(false), 300); // Reset interaction state after a short delay
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <ScrollView className="bg-gray-100">
        {/* Header Image Slider */}
        <View
          className="relative"
          onStartShouldSetResponder={handleSliderInteraction}
        >
          <Image
            source={images[currentImage]}
            className="w-full h-[300px]"
            resizeMode="cover"
          />
        </View>

        {/* Main Information Section */}
        <View className="p-4 bg-white shadow-md rounded-lg mx-4 -mt-16 flex-col items-center">
          <View className="flex-row w-[70%] justify-around items-center">
            <Image source={Logo} className="w-16 h-16 rounded-full" />
            <View className="py-7">
              <Text className="text-lg font-bold">Perfect Spot Auto Spa</Text>
              <Text className="text-gray-500">
                Deira, Dubai, United Arab Emirates
              </Text>
              <Text className="text-gray-500">Timings: 9:00 am - 9:00 pm</Text>
            </View>
          </View>
          <View className="flex-row justify-around w-full mx-1 py-2 pb-4">
            {" "}
            <TouchableOpacity className="rounded-lg border border-red-500 py-2 px-4 w-[49%]">
              {" "}
              <Text className="text-red-500 font-bold text-center text-xl">
                Chat
              </Text>{" "}
            </TouchableOpacity>{" "}
            <TouchableOpacity
              className="rounded-lg border border-red-500 py-2 px-4 w-[49%]"
              onPress={openDialer}
            >
              {" "}
              <Text className="text-red-500 font-bold text-center text-xl">
                Call
              </Text>{" "}
            </TouchableOpacity>{" "}
          </View>
        </View>

        {/* Search and Tab Navigation */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,
          }}
        >
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
                <Text>Search</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Tab Navigation */}
        <View className="flex w-full justify-center items-center">
          <View className="flex-row my-5 bg-white w-[80%] justify-between rounded-lg">
            <TouchableOpacity
              onPress={() => setTab("services")}
              className={`${tab === "services" ? "text-white bg-red-500 py-4 px-[20%] rounded-lg" : "text-red-500 py-4 px-[20%]"}`}
            >
              <Text>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTab("about")}
              className={`${tab === "about" ? "text-white bg-red-500 py-4 px-[20%] rounded-lg" : "text-red-500 py-4 px-[20%]"}`}
            >
              <Text>About</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Content Section */}
        {tab === "services" ? (
          <View>
            <View className="p-7 bg-white m-3 rounded-lg h-[320px]">
              <Link
                href={{
                  pathname: "/ServiceBooking", // Adjust the path to the actual file
                  params: {
                    image: ServiceImage,
                    name: "Car Polishing",
                    logo: Logo,
                    distance: "5 km",
                    price: "AED 150",
                    details:
                      "Special Discounted Offer For Ceramic Coating & Interior Detailing With Steam At Home.",
                  },
                }}
              >
                <TouchableOpacity>
                  <Image
                    source={ServiceImage}
                    className="w-full h-[200px] rounded-lg"
                  />
                  <Text className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">
                    Premium
                  </Text>
                  <Text className="text-lg font-bold mt-2">Car Polishing</Text>
                  <Text className="text-red-500 text-xl font-bold">
                    AED 150
                  </Text>
                  <Text className="text-gray-500 mt-1">
                    Special Discounted Offer For Ceramic Coating & Interior
                    Detailing With Steam At Home.
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>

            <View className="p-7 bg-white m-3 rounded-lg h-[320px]">
              <Link
                href={{
                  pathname: "/ServiceBooking", // Adjust the path to the actual file
                  params: {
                    image: ServiceImage,
                    name: "Car Polishing",
                    logo: Logo,
                    distance: "5 km",
                    price: "AED 150",
                    details:
                      "Special Discounted Offer For Ceramic Coating & Interior Detailing With Steam At Home.",
                  },
                }}
              >
                <TouchableOpacity>
                  <Image
                    source={ServiceImage}
                    className="w-full h-[200px] rounded-lg"
                  />
                  <Text className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">
                    Premium
                  </Text>
                  <Text className="text-lg font-bold mt-2">Car Polishing</Text>
                  <Text className="text-red-500 text-xl font-bold">
                    AED 150
                  </Text>
                  <Text className="text-gray-500 mt-1">
                    Special Discounted Offer For Ceramic Coating & Interior
                    Detailing With Steam At Home.
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        ) : (
          <View className="p-4">
            <Text className="text-lg font-bold">About Us</Text>
            <Text className="text-gray-500 mt-1">
              Perfect Spot Auto Spa is dedicated to providing top-notch car care
              services. Our team of professionals uses the latest techniques and
              products to ensure your car looks its best. Conveniently located
              in Deira, Dubai, we offer a wide range of services including car
              polishing, ceramic coating, and interior detailing.
            </Text>
          </View>
        )}
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Compprofile;
