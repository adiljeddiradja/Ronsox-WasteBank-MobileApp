import {Image, View} from "react-native";
import {useEffect} from "react";


function SplashScreen({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Welcome')
        }, 2000)
    }, [])
    return (
        <View style={{justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', backgroundColor: 'white'}}>
          <Image
              style={{ justifyContent: 'center', alignItems: 'center', height: 400, width: 400 }}
              source={require('../../Shared/assets/Images/splashImage.png')}

          />
        </View>
    )
}
export default SplashScreen