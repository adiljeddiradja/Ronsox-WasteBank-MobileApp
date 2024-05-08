import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AuthServices from "../../services/AuthServices";
import {colors} from "../../Shared/constant/colors";


const OTPScreen = ({navigation, route,}) => {
    const authService = AuthServices();
    const {email} = route.params;
    const [formOtp, setFormOtp] = useState({
        otp: '',
        email: email,
        typeOtp: 'registration'
    });


    const handleOtpChange = (value) => {
        setFormOtp({
            ...formOtp,
            otp: value
        });
    };


    const handleSubmit = async () => {
        try {
            const result = await authService.verifyOTP({otp: formOtp.otp, email: formOtp.email, typeOtp: formOtp.typeOtp});

            if (result && result.success) {
                console.log("Verification successful");
                navigation.navigate('Login');
            } else {
                Alert.alert("Verification Failed", result ? result.message : "Invalid response from server");
                console.error("Verification failed:", result ? result.message : "Invalid response from server");
            }
        } catch (error) {
            Alert.alert("Verification Failed", "An error occurred while verifying.");
            console.error("Verification failed:", error.message);
        }
    };



    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: colors.primary}}>Verifikasi OTP</Text>
            <TextInput
                placeholder={'Masukkan kode OTP'}
                keyboardType="number-pad"
                maxLength={6}
                onChangeText={handleOtpChange}
                value={formOtp.otp}
                style={{
                    width: '80%',
                    height: 60,
                    borderWidth: 4,
                    borderColor: colors.primary,
                    borderRadius: 5,
                    textAlign: 'center',
                    margin: 10,
                    marginTop: 40
                }}/>

            <TouchableOpacity onPress={handleSubmit} style={{
                backgroundColor: colors.success,
                padding: 10,
                borderRadius: 10,
                width: '40%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 40
            }}>
                <Text style={{fontWeight: 'bold', color: colors.background, fontSize: 20}}>Konfirmasi</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OTPScreen;
