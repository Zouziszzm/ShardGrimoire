import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { Link } from "expo-router";
import {
  FontAwesome5,
  MaterialIcons,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";

// Import your PNG images
//
import CarImage from "../../../assets/images/car.png";
import MotorcycleImage from "../../../assets/images/bike.png";
import StoreImage from "../../../assets/images/StoreImage.png";
import CogsImage from "../../../assets/images/CogsImage.png";
import IdCardImage from "../../../assets/images/IdCardImage.png";
import ToolsImage from "../../../assets/images/ToolsImage.png";
import ShowerImage from "../../../assets/images/ShowerImage.png";
import TruckImage from "../../../assets/images/TruckImage.png";
import ShipImage from "../../../assets/images/ShipImage.png";
import AD01 from "../../../assets/images/ads01.png";
import ToyotaLogo from "../../../assets/images/ToyotaLogo.png";
import Toyota from "../../../assets/images/Toyota.png"; 

const Home = () => {
  const [city, setCity] = useState("Dubai");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState("");

  const cities = ["Dubai", "Abu Dhabi", "Sharjah"];

  const handleOutsideClick = () => {
    setSearchActive(false);
    setShowDropdown(false);
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsideClick}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,
          }}
        >
          <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{city}</Text>
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
              onChangeText={setSearchText}
              autoFocus
            />
          ) : (
            <TouchableOpacity onPress={() => setSearchActive(true)}>
              <Ionicons name="search" size={24} color="black" />
            </TouchableOpacity>
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
                  setCity(item);
                  setShowDropdown(false);
                }}
              >
                <Text style={{ padding: 8 }}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, paddingHorizontal: 8 }}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
                marginBottom: 8,
              }}
            >
              {[
                { name: "Motors", image: CarImage },
                { name: "Motorbikes", image: MotorcycleImage },
                { name: "Showrooms", image: StoreImage },
                { name: "Parts & Accessories", image: CogsImage },
                { name: "Number Plates", image: IdCardImage },
                { name: "Car Service", image: ToolsImage },
                { name: "Car Wash", image: ShowerImage },
                { name: "Car Recovery", image: TruckImage },
                { name: "Boats", image: ShipImage },
              ].map((item, index) => (
                <Link href="/CarWashandDetailing" asChild key={index}>
                  <TouchableOpacity
                    key={index}
                    style={{ width: "30%", padding: 4 }}
                  >
                    <View
                      style={{
                        backgroundColor: "#f0f0f0",
                        padding: 8,
                        borderRadius: 8,
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{ width: 60, height: 60 }}
                      />
                      <Text style={{ marginTop: 8, textAlign: "center" }}>
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Link>
              ))}
            </View>
            <View style={{ marginBottom: 16 }}>
              <Image
                source={AD01}
                style={{
                  width: "100%",
                  height: undefined,
                  aspectRatio: 16 / 9,
                }}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Top Showrooms
              </Text>
              <TouchableOpacity>
                <Text style={{ color: "blue" }}>Show All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal style={{ marginTop: 8 }}>
              {[
                { name: "Toyota Motors", distance: "1.2 km", logo: ToyotaLogo },
                { name: "Honda Motors", distance: "2.0 km", logo: ToyotaLogo },
                { name: "Ford Motors", distance: "3.1 km", logo: ToyotaLogo },
              ].map((item, index) => (
                <View key={index} style={{ width: 256, padding: 8 }}>
                  <Image
                    source={item.image}
                    source={Toyota}
                    style={{
                      width: "100%",
                      height: undefined,
                      borderRadius: 8,
                      aspectRatio: 16 / 9,
                    }}
                    resizeMode="contain"
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 8,
                    }}
                  >
                    <Image
                      source={item.logo}
                      style={{ width: 24, height: 24, marginRight: 8 }}
                    />
                    <Text style={{ textAlign: "center" }}>{item.name}</Text>
                  </View>
                  <Text style={{ textAlign: "center", color: "gray" }}>
                    {item.distance}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 16,
            borderTopWidth: 1,
            borderTopColor: "#e0e0e0",
          }}
        >
          <TouchableOpacity>
            <FontAwesome5 name="home" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="bell" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="plus-circle" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="comments" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="user" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
