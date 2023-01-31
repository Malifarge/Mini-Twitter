import { useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"
import { FetchAllTweets } from "../API/Tweets"
import { TweetCard } from "../Components/TweetCard"
import globalStyles from "../Styles/Global"

export default Home = () =>{
    const [tweets,setTweets] = useState([])

    useEffect(()=>{
       FetchTweets()
    },[])

    const FetchTweets = async() =>{
        const response = await FetchAllTweets()
        setTweets(response)
    }
    
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titre}>Home</Text>
            {tweets && <FlatList
                data={tweets}
                renderItem={({item})=><TweetCard tweet={item}/>}
                keyExtractor={item=> item.created_at}
            />}
        </View>
    )
}