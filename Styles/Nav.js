import { StyleSheet } from "react-native";

const navStyles = StyleSheet.create({
    bottomBar: {
      height: 60,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      position: 'fixed',
      bottom: 0,
      backgroundColor: '#242121',
      borderColor: "#FC7987",
      borderTopWidth: 1,
      paddingBottom: 10,
    },
    text:{
        color: 'white' 
    }
  })

export default navStyles