import { useContext, useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"
import { useNavigate } from "react-router-native"
import { FetchAllTweets } from "../API/Tweets"
import { TweetCard } from "../Components/TweetCard"
import { UserContext } from "../Context/User"
import globalStyles from "../Styles/Global"

export default Home = () =>{

    const {user} = useContext(UserContext)

    const [tweets,setTweets] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    },[])

    useEffect(()=>{
       FetchTweets()
    },[])

    const FetchTweets = async() =>{
        const response = await FetchAllTweets()
        setTweets(response)
    }

    return(
        <View style={globalStyles.container}>
            {tweets && <FlatList
                data={tweets}
                renderItem={({item})=><TweetCard tweet={item}/>}
                keyExtractor={item=> item.created_at}
            />}
        </View>
    )
}