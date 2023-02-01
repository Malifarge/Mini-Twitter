import { useContext, useEffect } from "react"
import { Image, Text, View } from "react-native"
import { UserContext } from "../Context/User"
import headerStyles from "../Styles/Header"


export const Header = () =>{

    const {user} =useContext(UserContext)

    useEffect(()=>{
    },[user])
    return(
        <View style={headerStyles.headerContainer}>
            <View style={headerStyles.container}>
                <Image source={require('../images/logo.png')} style={headerStyles.img}/>
                <Text style={headerStyles.text}>Wolfer</Text>
            </View>
            {user && <View style={headerStyles.container}>
                    <Text>{user.user_metadata.firstName.substr(0,1)}.{user.user_metadata.lastName}</Text>
                </View>}
        </View>
    )
}