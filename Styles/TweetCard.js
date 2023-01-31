import { StyleSheet } from 'react-native'

const TweetStyles = StyleSheet.create({
  container: {
    borderTopWidth:2,
    borderBottomWidth:2,
    borderColor: "#FC7987",
    margin: 20,
    padding: 20,
  },
  titre: {
    fontSize: 25
  },
  date:{
    fontSize: 10,
    textAlign: "right",
  },
  content:{
    marginTop: 10,
    marginBottom:10,
  }
  
})

export default TweetStyles