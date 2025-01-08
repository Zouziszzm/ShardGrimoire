import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { RadioButton } from 'react-native-paper';
import { useRouter } from 'expo-router';


import CarImage from "../../../assets/images/actualcarwash.png";

const ServiceBooking = () => {
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState('Perfect Spot Auto Spa');
  const [vehicle, setVehicle] = useState('Lamborghini Aventador');
  const [service, setService] = useState('Classic Clean');
  const router = useRouter();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const showDatepicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: 'date',
      is24Hour: true,
    });
  };

  const handleConfirmBooking = () => {
    router.push({
      pathname: '/(root)/(tabs)/ConfirmationPage',
      params: { date: date.toISOString(), location, vehicle, service }
    });
  };

  return (
    <ScrollView className="p-4">
      <View className="mb-4">
        <Text className="text-lg font-bold">Car Wash</Text>
        <Text>Special Discounted Offer For Car Wash & Car Wash Premium with Steam At Home.</Text>
        <Image
          source={CarImage}
          className="w-full h-[350px] mt-4"
        />
      </View>

      <View className="mb-4">
        <Text className="text-lg font-bold">Select Date & Time</Text>
        <TouchableOpacity onPress={showDatepicker} className="border p-2 rounded mt-2">
          <Text>{date.toDateString()} - {date.toLocaleTimeString()}</Text>
        </TouchableOpacity>
      </View>

      <View className="mb-4">
        <Text className="text-lg font-bold">Please choose preferred location</Text>
        <TouchableOpacity onPress={() => setLocation('Perfect Spot Auto Spa')} className={`border p-2 rounded mt-2 ${location === 'Perfect Spot Auto Spa' ? 'bg-gray-200' : ''}`}>
          <View className="flex-row items-center">
            <RadioButton
              value="Perfect Spot Auto Spa"
              status={location === 'Perfect Spot Auto Spa' ? 'checked' : 'unchecked'}
              onPress={() => setLocation('Perfect Spot Auto Spa')}
            />
            <View>
              <Text>Perfect Spot Auto Spa</Text>
              <Text>Deira, Dubai, United Arab Emirates</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLocation('Home Service')} className={`border p-2 rounded mt-2 ${location === 'Home Service' ? 'bg-gray-200' : ''}`}>
          <View className="flex-row items-center">
            <RadioButton
              value="Home Service"
              status={location === 'Home Service' ? 'checked' : 'unchecked'}
              onPress={() => setLocation('Home Service')}
            />
            <View>
              <Text>Home Service</Text>
              <Text>Saved Address: Nasa Bldg, Deira, Dubai, UAE</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View className="mb-4">
        <Text className="text-lg font-bold">Please choose your vehicle</Text>
        <TouchableOpacity onPress={() => setVehicle('Lamborghini Aventador')} className={`border p-2 rounded mt-2 ${vehicle === 'Lamborghini Aventador' ? 'bg-gray-200' : ''}`}>
          <View className="flex-row items-center">
            <RadioButton
              value="Lamborghini Aventador"
              status={vehicle === 'Lamborghini Aventador' ? 'checked' : 'unchecked'}
              onPress={() => setVehicle('Lamborghini Aventador')}
            />
            <View>
              <Text>Lamborghini Aventador</Text>
              <Text>AE 123456</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setVehicle('Nissan Patrol')} className={`border p-2 rounded mt-2 ${vehicle === 'Nissan Patrol' ? 'bg-gray-200' : ''}`}>
          <View className="flex-row items-center">
            <RadioButton
              value="Nissan Patrol"
              status={vehicle === 'Nissan Patrol' ? 'checked' : 'unchecked'}
              onPress={() => setVehicle('Nissan Patrol')}
            />
            <View>
              <Text>Nissan Patrol</Text>
              <Text>PLATE 12345</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="border p-2 rounded mt-2">
          <Text>+ Add new vehicle</Text>
        </TouchableOpacity>
      </View>

      <View className="mb-4">
        <Text className="text-lg font-bold">Select type of Car wash</Text>
        <TouchableOpacity onPress={() => setService('Classic Clean')} className={`border p-2 rounded mt-2 ${service === 'Classic Clean' ? 'bg-gray-200' : ''}`}>
          <View className="flex-row items-center">
            <RadioButton
              value="Classic Clean"
              status={service === 'Classic Clean' ? 'checked' : 'unchecked'}
              onPress={() => setService('Classic Clean')}
            />
            <View>
              <Text>Classic Clean</Text>
              <Text>AED 150</Text>
              <Text>35-50 minutes</Text>
              <Text>✔ Eco-chic water wash</Text>
              <Text>✔ Premium scratch free micro-fibre towels</Text>
              <Text>✔ Luxury wax hand wash</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setService('Classic Clean + Interior')} className={`border p-2 rounded mt-2 ${service === 'Classic Clean + Interior' ? 'bg-gray-200' : ''}`}>
          <View className="flex-row items-center">
            <RadioButton
              value="Classic Clean + Interior"
              status={service === 'Classic Clean + Interior' ? 'checked' : 'unchecked'}
              onPress={() => setService('Classic Clean + Interior')}
            />
            <View>
              <Text>Classic Clean + Interior</Text>
              <Text>AED 300</Text>
              <Text>55-70 minutes</Text>
              <Text>✔ Everything in Classic Clean</Text>
              <Text>✔ Interior deep cleaning and vacuum</Text>
              <Text>✔ Leather conditioning</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <Button title="Confirm Booking" onPress={handleConfirmBooking} />
    </ScrollView>
  );
};

export default ServiceBooking;
