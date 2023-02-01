import { Image, Text, View } from "react-native"
import headerStyles from "../Styles/Header"


export const Header = () =>{
    return(
        <View style={headerStyles.container}>
            <Image source={require('../images/logo.png')} style={headerStyles.img}/>
            <Text style={headerStyles.text}>Wolfer</Text>
        </View>
    )
}