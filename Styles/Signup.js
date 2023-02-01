import { StyleSheet } from "react-native";

const signupStyles = StyleSheet.create({
    signupContainer:{
      flex: 1,
      margin: 20,
      justifyContent: "center"  
    },
    Titre:{
        fontSize:20,
        textAlign: "center",
    },
    inputContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 250,
    },
})

export default signupStyles