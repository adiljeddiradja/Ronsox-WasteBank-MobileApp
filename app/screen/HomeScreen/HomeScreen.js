import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {colors} from "../../Shared/constant/colors";
import {FontAwesome5, FontAwesome6, MaterialIcons} from "@expo/vector-icons";
import {borders} from "../../Shared/constant/borders";

function HomeScreen({}) {
    return (
        //Logo
        <ScrollView style={{flex: 1, margin: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                <Image
                    style={{width: 70, height: 70}}
                    source={require('../../Shared/assets/Images/splashImage.png')}
                />
                <View>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: colors.primary}}>Bank</Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: colors.secondary}}>Sampah</Text>
                </View>
            </View>

            <View style={{
                marginTop: 20,
                padding: 20,
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                borderRadius: borders.radiusMedium
            }}>
                <View style={{borderRadius: borders.radiusMedium}}>
                    <View style={{
                        flexDirection: 'row',
                        borderRadius: borders.radiusMedium
                    }}>
                        <FontAwesome5 name="money-bill-wave-alt" size={20} style={{color: colors.warning}}/>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: colors.primary,
                            marginLeft: 10
                        }}>Saldo</Text>
                    </View>
                    <View style={{
                        padding: 10,
                    }}>
                        <Text style={{fontSize: 24, fontWeight: 'bold', color: colors.secondary}}>Rp. 80.000.000,00</Text>
                    </View>
                    <View style={{borderTopColor: colors.primary, borderTopWidth: 1,}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: colors.secondary, marginTop: 10}}>Total
                            Sampah
                            Disetor</Text>
                        <View style={{padding: 10, marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 35, fontWeight: 'bold', color: colors.primary}}>100</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/*List*/}
            <View style={{margin: 10}}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    margin: 5,
                    borderRadius: borders.radiusMedium,
                    alignItems: 'center',
                    backgroundColor: colors.success,
                    padding: 25
                }}>
                    <FontAwesome6 name="trash-can-arrow-up" size={30} style={{color: colors.background}}/>
                    <View>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: colors.background, marginLeft: 10}}>Setor
                            Sampah</Text>
                        <Text style={{fontSize: 12, color: colors.background, marginLeft: 10}}>Setor sampah dan dapatkan
                            saldonya!</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    flexDirection: 'row',
                    margin: 5,
                    borderRadius: borders.radiusMedium,
                    alignItems: 'center',
                    backgroundColor: colors.warning,
                    padding: 25
                }}>
                    <FontAwesome6 name="money-bill-transfer" size={30} style={{color: colors.background}}/>
                    <View>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: colors.background, marginLeft: 10}}>Tarik
                            Saldo</Text>
                        <Text style={{fontSize: 12, color: colors.background, marginLeft: 10}}>Tukar saldo menjadi
                            uang!</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    flexDirection: 'row',
                    margin: 5,
                    borderRadius: borders.radiusMedium,
                    alignItems: 'center',
                    backgroundColor: colors.blue,
                    padding: 25
                }}>
                    <MaterialIcons name="perm-device-info" size={30} style={{color: colors.background}}/>
                    <View>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: colors.background, marginLeft: 10}}>Panduan
                            jenis sampah</Text>
                        <Text style={{fontSize: 12, color: colors.background, marginLeft: 10}}>Informasi jenis sampah</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </ScrollView>

    )
}

export default HomeScreen