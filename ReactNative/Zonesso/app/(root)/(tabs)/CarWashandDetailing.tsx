import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { Link } from "expo-router"; // Import Link for navigation
import { Ionicons } from "@expo/vector-icons";

// Placeholder images for services and logos
const actualcarwash = require("../../../assets/images/actualcarwash.png");
const casrwashcartton = require("../../../assets/images/casrwashcartton.png");
const companyLogo = require("../../../assets/images/ToyotaLogo.png");
const carwashdetails = require("../../../assets/images/carwashdetails.png");

// Sample data
const services = {
  Dubai: [
    {
      name: "Service 1",
      logo: companyLogo,
      image: actualcarwash,
      distance: "1.2 km",
    },
    {
      name: "Service 2",
      logo: companyLogo,
      image: casrwashcartton,
      distance: "2.5 km",
    },
    {
      name: "Service 3",
      logo: companyLogo,
      image: actualcarwash,
      distance: "3.0 km",
    },
  ],
  Sharjah: [
    {
      name: "Service 1",
      logo: companyLogo,
      image: casrwashcartton,
      distance: "1.8 km",
    },
    {
      name: "Service 2",
      logo: companyLogo,
      image: casrwashcartton,
      distance: "2.3 km",
    },
    {
      name: "Service 3",
      logo: companyLogo,
      image: casrwashcartton,
      distance: "2.7 km",
    },
  ],
  AbuDhabi: [
    {
      name: "Service 1",
      logo: companyLogo,
      image: actualcarwash,
      distance: "1.0 km",
    },
    {
      name: "Service 2",
      logo: companyLogo,
      image: casrwashcartton,
      distance: "1.5 km",
    },
    {
      name: "Service 3",
      logo: companyLogo,
      image: carwashdetails,
      distance: "2.0 km",
    },
  ],
};

const CarWashandDetailing = () => {
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const { width } = Dimensions.get("window");
  const itemWidth = width / 2 - 24;

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Car Wash & Detailing
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {showSearch && (
            <TextInput
              style={{
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 8,
                paddingHorizontal: 8,
                marginRight: 8,
              }}
              placeholder="Search..."
              value={searchText}
              onChangeText={setSearchText}
            />
          )}
          <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 16 }}>
            <Ionicons name="filter" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {Object.entries(services).map(([location, servicesList]) => (
          <View key={location} style={{ marginBottom: 16 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {location}
              </Text>
              <TouchableOpacity>
                <Text style={{ color: "blue" }}>View All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsVerticalScrollIndicator={false} // Hides the vertical scrollbar
      showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: "row" }}>
                {servicesList.map((service, index) => (
                  <Link
                    href={{
                      pathname: "/(root)/(tabs)/ShowroomDetails", // Route to compprofile.tsx
                      params: {
                        image: service.image,
                        name: service.name,
                        logo: service.logo,
                        distance: service.distance,
                      },
                    }}
                    asChild
                    key={index}
                  >
                    <TouchableOpacity
                      style={{
                        width: itemWidth,
                        height: 250,
                        marginRight: 16,
                      }}
                    >
                      <Image
                        source={service.image}
                        style={{ width: "100%", height: 180, borderRadius: 8 }}
                        resizeMode="cover"
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 8,
                        }}
                      >
                        <Image
                          source={service.logo}
                          style={{
                            width: 24,
                            height: 24,
                            marginRight: 8,
                          }}
                          resizeMode="contain"
                        />
                        <View>
                          <Text style={{ textAlign: "center" }}>
                            {service.name}
                          </Text>
                          <Text style={{ textAlign: "center" }}>
                            {service.distance}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </Link>
                ))}
              </View>
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CarWashandDetailing;
