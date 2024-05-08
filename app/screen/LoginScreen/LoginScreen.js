import {Alert, Image, Text, TouchableOpacity, View} from "react-native";
import {colors} from "../../Shared/constant/colors";
import CustomTextIput from "../../Shared/components/CustomTextIput";
import AuthServices from "../../services/AuthServices";
import {useState} from "react";

function LoginScreen({navigation}) {
    const authService = AuthServices()
    const [formData,setFormData] = useState({
        username: '',
        password: ''

    })
    const handleInputChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        });
    };

    const handleSubmit = async () => {
        try {
            const result = await authService.login(formData);
            console.log(result)
            console.log("Login berhasil:", result);
            navigation.navigate("Home", {email: formData.email});
        } catch (error) {

            console.error("Login gagal:", error.message);
            Alert.alert("Login Gagal", error.message);
        }
    };
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            backgroundColor: 'white'
        }}>
            <Text style={{fontWeight: 'bold', color: colors.primary, fontSize: 30}}>Login</Text>
            <Image
                style={{ justifyContent: 'center', alignItems: 'center', height: 300, width: 300 }}
                source={require('../../Shared/assets/Images/Login.png')}
            />
            <CustomTextIput style={{width: 300 }}
            placeholder={'Username'}
            onChangeText={(value) => handleInputChange('username', value)}
            >
            </CustomTextIput>
            <CustomTextIput style={{width: 300, }}
            placeholder={'Password'}
            onChangeText={(value) => handleInputChange('password', value)}
            >
            </CustomTextIput>
           <TouchableOpacity
               onPress={handleSubmit}
               style={{marginTop:40,backgroundColor:colors.primary,borderStyle:'solid',borderRadius:10,padding:10,width:200,justifyContent:'center',alignItems:'center'}}>
               <Text style={{fontWeight:'bold',color:colors.background}}>Login</Text>
           </TouchableOpacity>
        </View>
    )

}

export default LoginScreen