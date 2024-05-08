import {Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
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
import AuthServices from "../../services/AuthServices";

function RegisterScreen({navigation}) {
    const authService = AuthServices()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        email: '',
        mobilePhoneNo: '',
        ktpNumber: '',
        address: '',
        birthDate: '',
    });
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {

        const formattedDate = date.toISOString().split('T')[0];

        setFormData({
            ...formData,
            birthDate: formattedDate
        });
        hideDatePicker();
    };

    const handleInputChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        });
    };

    const handleSubmit = async () => {
        try {
            const result = await authService.register(formData);
            console.log(result)
            console.log("Registrasi berhasil:", result);
            navigation.navigate("Otp", {email: formData.email});
        } catch (error) {

            console.error("Registrasi gagal:", error.message);
            Alert.alert("Registrasi Gagal", error.message);
        }
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
                     onChangeText={(text)=>handleInputChange('mobilePhoneNo', text)}
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
                     onChangeText={(text)=>handleInputChange('ktpNumber', text)}
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