import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
    headerContainer:{
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center"
    },  
    container:{
        marginTop: 50,
        flexDirection: "row",
        alignItems: "center",
    },
    img:{
        width: 30,
        height: 45
    },
    text:{
        marginLeft: 20,
        fontSize:30,
        color:"#FC7987"
    },
    gap:{
        marginLeft: 20,
    }
})

export default headerStyles