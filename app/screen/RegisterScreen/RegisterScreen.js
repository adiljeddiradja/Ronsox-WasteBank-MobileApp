import {Alert, Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {
    AntDesign,
    Fontisto,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    SimpleLineIcons,
    Zocial
} from "@expo/vector-icons";
import {colors} from "../../Shared/constant/colors";
import {useState} from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

function RegisterScreen({}) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        email: '',
        phone: '',
        ktp: '',
        address: '',
        birthday: '',
    });
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // Format tanggal menjadi string (misal: "2024-05-07")
        const formattedDate = date.toISOString().split('T')[0];
        // Simpan tanggal ke dalam state formData
        setFormData({
            ...formData,
            birthday: formattedDate
        });
        hideDatePicker();
    };

    const handleInputChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        });
    };

    const handleSubmit = () => {

        const message = `Username: ${formData.username}\nPassword: ${formData.password}\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nktp: ${formData.ktp}\nAddress: ${formData.address}\nBirthday: ${formData.birthday}`;


        Alert.alert('Data yang dimasukkan:', message);
    };
    return (
      <ScrollView
      style={{
          flex: 1,
          backgroundColor: 'white',
      }}
      >
          <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',

          }}>
              <Image
                  source={require('../../Shared/assets/Images/splashImage.png')}
                  style={{width: 100, height: 100, marginTop: 20, marginBottom: 20, alignSelf: 'center'}}
              />
          </View>
          <View>
              <Text style={{fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>Daftar Bank Sampah</Text>
          </View>
         <View style={{justifyContent: 'center', alignItems: 'center',marginTop: 20}}>
             <View
                 style={{
                     height: 50,
                     margin: 12,
                     borderWidth: 1,
                     padding: 10,
                     borderRadius: 5,
                     flexDirection: 'row',
                     alignItems: 'center',
                     width: '80%',
                 }}>
                 <Ionicons name="person-outline" size={15} color="black" />
                 <TextInput
                     onChangeText={(text)=>handleInputChange('username', text)}
                     placeholder="Username"
                     keyboardType="default"
                     style={{marginStart: 10, flex: 1}}
                 />
             </View>
             <View
                 style={{
                     height: 50,
                     margin: 12,
                     borderWidth: 1,
                     padding: 10,
                     borderRadius: 5,
                     flexDirection: 'row',
                     alignItems: 'center',
                     width: '80%',
                 }}>
                 <MaterialIcons name="password" size={15} color="black" />
                 <TextInput
                     onChangeText={(text)=>handleInputChange('password', text)}
                     placeholder="Password"
                     keyboardType="default"
                     style={{marginStart: 10, flex: 1}}
                 />
             </View>
             <View
                 style={{
                     height: 50,
                     margin: 12,
                     borderWidth: 1,
                     padding: 10,
                     borderRadius: 5,
                     flexDirection: 'row',
                     alignItems: 'center',
                     width: '80%',
                 }}>
                 <AntDesign name="solution1" size={15} color="black" />
                 <TextInput
                     onChangeText={(text)=>handleInputChange('name', text)}
                     placeholder="Nama"
                     keyboardType="default"
                     style={{marginStart: 10, flex: 1}}
                 />
             </View>
             <View
                 style={{
                     height: 50,
                     margin: 12,
                     borderWidth: 1,
                     padding: 10,
                     borderRadius: 5,
                     flexDirection: 'row',
                     alignItems: 'center',
                     width: '80%',
                 }}>
                 <Zocial name="email" size={15} color="black" />
                 <TextInput
                     onChangeText={(text)=>handleInputChange('email', text)}
                     placeholder="Email"
                     keyboardType="default"
                     style={{marginStart: 10, flex: 1}}
                 />
             </View>
             <View
                 style={{
                     height: 50,
                     margin: 12,
                     borderWidth: 1,
                     padding: 10,
                     borderRadius: 5,
                     flexDirection: 'row',
                     alignItems: 'center',
                     width: '80%',
                 }}>
                 <AntDesign name="mobile1" size={15} color="black" />
                 <TextInput
                     onChangeText={(text)=>handleInputChange('phone', text)}
                     placeholder="No telepon"
                     keyboardType="default"
                     style={{marginStart: 10, flex: 1}}
                 />
             </View>

             <View
                 style={{
                     height: 50,
                     margin: 12,
                     borderWidth: 1,
                     padding: 10,
                     borderRadius: 5,
                     flexDirection: 'row',
                     alignItems: 'center',
                     width: '80%',
                 }}>
                 <MaterialCommunityIcons name="card-account-details-outline" size={15} color="black" />
                 <TextInput
                     onChangeText={(text)=>handleInputChange('ktp', text)}
                     placeholder="Nomor KTP"
                     keyboardType="default"
                     style={{marginStart: 10, flex: 1}}
                 />
             </View>
             <View
                 style={{
                     height: 50,
                     margin: 12,
                     borderWidth: 1,
                     padding: 10,
                     borderRadius: 5,
                     flexDirection: 'row',
                     alignItems: 'center',
                     width: '80%',
                 }}>
                 <SimpleLineIcons name="location-pin" size={15} color="black" />
                 <TextInput
                     onChangeText={(text)=>handleInputChange('address', text)}
                     placeholder="Alamat"
                     keyboardType="default"
                     style={{marginStart: 10, flex: 1}}
                 />
             </View>
             <TouchableOpacity
                 onPress={showDatePicker}
             style={{
                 flexDirection: 'row',
                 alignItems: 'center',
                 margin: 5,
                 padding: 10,
                 borderRadius: 5,
                 width: '80%',
             }}
             >
                 <Fontisto name="date" size={35} color="black" />
                 <Text style={{fontWeight: 'bold', fontSize: 15, textAlign: 'center',width: '60%'}}>Pilih tanggal lahir</Text>
                 <DateTimePickerModal
                     isVisible={isDatePickerVisible}
                     mode="date"
                     onConfirm={handleConfirm}
                     onCancel={hideDatePicker}
                 />
             </TouchableOpacity>

             <TouchableOpacity
             onPress={handleSubmit}
             >
                 <View
                     style={{
                         height: 50,
                         margin: 12,
                         padding: 10,
                         borderRadius: 5,
                         flexDirection: 'row',
                         alignItems: 'center',
                         width: '80%',
                         backgroundColor: colors.primary
                     }}>
                     <Text style={{fontWeight: 'bold', fontSize: 15, textAlign: 'center',width: '60%',color: colors.background}}>Daftar</Text>
                 </View>
             </TouchableOpacity>
         </View>
      </ScrollView>
    )
}

export default RegisterScreen