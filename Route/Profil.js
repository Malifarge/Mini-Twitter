import { useContext, useEffect, useState } from "react"
import { Button, FlatList, Text, TextInput, View } from "react-native"
import { FetchPutTweet, FetchUserTweets } from "../API/Tweets"
import { TweetCard } from "../Components/TweetCard"
import { UserContext } from "../Context/User"
import globalStyles from "../Styles/Global"
import homeStyle from "../Styles/Home"
import profilStyles from "../Styles/Profil"

export const Profil = () =>{
    const {user,token} = useContext(UserContext)

    const [tweets,setTweets] = useState([])
    const [putTweet,setPutTweet] = useState(false)
    const [id,setId] = useState(null)
    const [newTweet,setNewTweet] = useState("")

    useEffect(()=>{
        FetchTweets()
     },[])
 
     const FetchTweets = async() =>{
        const {id} = user
         const response = await FetchUserTweets(id,token)
         setTweets(response)
     }

     const handlePressPut = (id) =>{
        setPutTweet(true)
        setId(id)
     }

     const handleNewTweetSubmit = async() =>{
        const body={
            Tweet:newTweet
        }
        await FetchPutTweet(id,token,body)
        setPutTweet(false)
        setId("")
        FetchTweets()
     }

    return(
        <View style={globalStyles.container}>
            <View style={profilStyles.container}>
                <Text style={profilStyles.titre}>Profil</Text>
            </View>
            <View style={profilStyles.container}>
                <Text style={profilStyles.info}>firstName: {user.user_metadata.firstName}</Text>
                <Text style={profilStyles.info}>lastName: {user.user_metadata.lastName}</Text>
                <Text style={profilStyles.info}>Email: {user.email}</Text>
            </View>
                <Text style={profilStyles.titre}>Mes tweets</Text>
                {tweets && <FlatList
                    data={tweets}
                    renderItem={({item})=><><TweetCard tweet={item} link/>
                    <View>
                        <Button title="modifier?" onPress={()=>handlePressPut(item.id)} />
                    </View></>}
                    keyExtractor={item=> item.created_at}
                />
                }
            
            {putTweet && <View style={homeStyle.container}>
                <Text>Texte</Text>
                <TextInput
                    value={newTweet}
                    style={homeStyle.input}
                    onChangeText={value => setNewTweet(value)}
                />
                <Button title="modifier" color='#FC7987' onPress={handleNewTweetSubmit}/>
            </View>}

        </View>
    )
}