import { useContext, useEffect, useState } from "react"
import { Text, View } from "react-native"
import { useParams } from "react-router-native"
import { FetchTweet } from "../API/Tweets"
import { TweetCard } from "../Components/TweetCard"
import { UserContext } from "../Context/User"
import globalStyles from "../Styles/Global"

export const Tweet = () =>{

    const [tweet,setTweet] = useState('')

    const {token} = useContext(UserContext)

    const {id} = useParams()

    useEffect(()=>{
        GetTweet()
    },[])

    const GetTweet = async() =>{
        const response = await FetchTweet(id,token)
        setTweet(response[0])
    }

    return(
        <View style={globalStyles.container}>
            {tweet && <TweetCard tweet={tweet}/>}
        </View>
    )
}