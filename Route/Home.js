import { useContext, useEffect, useState } from "react"
import { Button, FlatList, Text, TextInput, View } from "react-native"
import { useNavigate } from "react-router-native"
import { CreateTweet, FetchAllTweets } from "../API/Tweets"
import { TweetCard } from "../Components/TweetCard"
import { UserContext } from "../Context/User"
import globalStyles from "../Styles/Global"
import homeStyle from "../Styles/Home"

export default Home = () =>{

    const {user,token} = useContext(UserContext)

    const [tweets,setTweets] = useState([])
    const [Tweet,setTweet] = useState('')

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
        const response = await FetchAllTweets(token)
        setTweets(response)
    }

    const handleSubmit = async() =>{

        const body ={
            Tweet,
            user_id: user.id,
            User_name: `${user.user_metadata.firstName} ${user.user_metadata.lastName}`
        }

        await CreateTweet(body,token)
        FetchTweets()
        setTweet('')
    }

    return(
        <View style={globalStyles.container}>
            {tweets && <FlatList
                data={tweets}
                renderItem={({item})=><TweetCard tweet={item} link/>}
                keyExtractor={item=> item.created_at}
            />}
            <View style={homeStyle.container}>
                <Text>Texte</Text>
                <TextInput
                    value={Tweet}
                    style={homeStyle.input}
                    onChangeText={value => setTweet(value)}
                />
                <Button title="Wolfer" color='#FC7987' onPress={handleSubmit}/>
            </View>
        </View>
    )
}