import {Image, Text, TouchableOpacity, View} from "react-native";
import {colors} from "../../Shared/constant/colors";
import CustomTextIput from "../../Shared/components/CustomTextIput";

function LoginScreen() {
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
            placeholder={'Username'}>
            </CustomTextIput>
            <CustomTextIput style={{width: 300, }}
            placeholder={'Password'}>
            </CustomTextIput>
           <TouchableOpacity style={{marginTop:40,backgroundColor:colors.primary,borderStyle:'solid',borderRadius:10,padding:10,width:200,justifyContent:'center',alignItems:'center'}}>
               <Text style={{fontWeight:'bold',color:colors.background}}>Login</Text>
           </TouchableOpacity>
        </View>
    )

}

export default LoginScreen