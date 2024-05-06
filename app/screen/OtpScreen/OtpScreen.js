import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from "../../Shared/constant/colors";

const OTPScreen = ({navigation}) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < newOtp.length - 1) {
            this.inputs[index + 1].focus();
        }
    };
    const inputs = [];
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>Masukkan OTP</Text>
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.box}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(value) => handleOtpChange(value, index)}
                        value={digit}
                        ref={(input) => {
                            inputs[index] = input;
                        }}
                    />
                ))}
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.button}>
                <Text style={styles.textButton}>Verifikasi</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    otpContainer: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        borderWidth: 1,
        borderColor: 'black',
        width: 40,
        height: 40,
        margin: 10,
        textAlign: 'center',
        fontSize: 20,
    },
    tittle: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    button: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: colors.background,
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default OTPScreen;