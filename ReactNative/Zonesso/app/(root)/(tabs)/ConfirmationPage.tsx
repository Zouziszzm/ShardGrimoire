import React, { useState } from 'react';
import { View, Text, Button, ScrollView, Modal, TouchableOpacity, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const ConfirmationPage = () => {
  const router = useRouter();
  const { date, location, vehicle, service } = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirmPayment = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    router.push('/(root)/tabs/ServiceBooking');
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16, backgroundColor: '#fff' }}>
      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Pay & Confirm</Text>
      </View>

      <View style={{ marginBottom: 16 }}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={{ width: '100%', height: 350 }}
        />
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Location Details:</Text>
        <Text style={{ fontSize: 16 }}>The Iridium Building, Al Barsha, Dubai, UAE</Text>
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Services Added:</Text>
        <Text style={{ fontSize: 16 }}>Car Wash</Text>
        <Text style={{ fontSize: 16 }}>{service} AED 150</Text>
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Vehicle Details:</Text>
        <Text style={{ fontSize: 16 }}>{vehicle}</Text>
        <Text style={{ fontSize: 16 }}>AE 123456</Text>
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Time and Date:</Text>
        <Text style={{ fontSize: 16 }}>{new Date(date).toDateString()} - {new Date(date).toLocaleTimeString()}</Text>
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Payment Summary:</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16 }}>Car Recovery:</Text>
          <Text style={{ fontSize: 16 }}>150 AED</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16 }}>VAT (12%):</Text>
          <Text style={{ fontSize: 16 }}>18 AED</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16 }}>Delivery Charges:</Text>
          <Text style={{ fontSize: 16 }}>0 AED</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16 }}>Total Payable Amount:</Text>
          <Text style={{ fontSize: 16 }}>168 AED</Text>
        </View>
      </View>

      <Button title="Confirm" onPress={handleConfirmPayment} />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ width: 300, padding: 20, backgroundColor: '#fff', borderRadius: 10, alignItems: 'center' }}>
            <Image source={require('./path-to-checkmark-icon.png')} style={{ width: 50, height: 50, marginBottom: 10 }} />
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Congratulations!</Text>
            <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 20 }}>Your ad is now live</Text>
            <TouchableOpacity style={{ backgroundColor: 'orange', padding: 10, borderRadius: 5 }} onPress={handleCloseModal}>
              <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>See Ad Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ConfirmationPage;
