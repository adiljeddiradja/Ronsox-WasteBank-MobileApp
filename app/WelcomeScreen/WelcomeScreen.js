import {Image, Text, TouchableOpacity, View} from "react-native";
import {colors} from "../Shared/constant/colors";

function WelcomeScreen({navigation}) {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            backgroundColor: 'white'
        }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: colors.primary}}>Selamat Datang</Text>
            <Image
                style={{justifyContent: 'center', alignItems: 'center', height: 300, width: 300}}
                source={require('../Shared/assets/Images/Welcome.png')}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
                style={{
                    borderStyle: 'solid',
                    borderRadius: 10,
                    padding: 10,
                    marginTop: 30,
                    width: 300,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.primary
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Belum Punya Akun?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    marginTop: 30,
                    width: 300,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: colors.primary
                }}>
                <Text style={{fontWeight: 'bold', color: colors.primary}}>Sudah Punya Akun?</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeScreen