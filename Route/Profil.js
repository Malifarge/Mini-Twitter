import { useContext, useEffect, useState } from "react"
import { Button, FlatList, Text, TextInput, View } from "react-native"
import { useNavigate } from "react-router-native"
import { FetchDeleteTweet, FetchPutTweet, FetchUserTweets } from "../API/Tweets"
import { PutUser } from "../API/User"
import { TweetCard } from "../Components/TweetCard"
import { UserContext } from "../Context/User"
import globalStyles from "../Styles/Global"
import homeStyle from "../Styles/Home"
import profilStyles from "../Styles/Profil"
import signupStyles from "../Styles/Signup"

export const Profil = () =>{
    const {user,token,logout,setToken} = useContext(UserContext)
    const navigate = useNavigate()

    const [tweets,setTweets] = useState([])
    const [putTweet,setPutTweet] = useState(false)
    const [id,setId] = useState(null)
    const [newTweet,setNewTweet] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [editUser,setEditUser] = useState(false)

    useEffect(()=>{
        if(user){
            FetchTweets()
            setFirstName(user.user_metadata.firstName)
            setLastName(user.user_metadata.lastName)
            setEmail(user.email)
        }else{
            navigate('/login')
        }
     },[])

     useEffect(()=>{
        if(user){
            FetchTweets()
            setFirstName(user.user_metadata.firstName)
            setLastName(user.user_metadata.lastName)
            setEmail(user.email)
        }else{
            navigate('/login')
        }
     },[user])
 
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

     const handlePressDelete = async(id) => {
        await FetchDeleteTweet(id,token)
        FetchTweets()
     }

     const handlePutUser=async() =>{
        const body ={
            email,
            password,
            data:{
                firstName,
                lastName,
            }
        }
        await PutUser(token,body)
        setEditUser(false)
        setToken(null)
        setToken(token)
     }

     const handleEditPress = () =>{
        setEditUser(true)
     }

    return(
        <View style={globalStyles.container}>
            <View style={profilStyles.container}>
                <View style={profilStyles.profilContainer}>
                    <Text style={profilStyles.titre}>Profil</Text>
                    <View style={profilStyles.profilContainer}>
                        <Button title="EditProfil?" onPress={handleEditPress}/>
                        <Button title="Logout" onPress={logout}/>
                    </View>
                </View>
            </View>
            <View style={profilStyles.container}>
                {user && 
                    <View>
                        <Text style={profilStyles.info}>firstName: {user.user_metadata.firstName}</Text>
                        <Text style={profilStyles.info}>lastName: {user.user_metadata.lastName}</Text>
                        <Text style={profilStyles.info}>Email: {user.email}</Text>
                    </View>
                }
                {editUser && 
                    <View>
                        <View style={signupStyles.inputContainer}>

                        <Text>Email</Text>

                        <TextInput
                            style={signupStyles.input}
                            value={email}
                            onChangeText={value => setEmail(value)}
                        />
                        </View>

                        <View style={signupStyles.inputContainer}>

                        <Text>Password</Text>

                        <TextInput
                            style={signupStyles.input}
                            value={password}
                            onChangeText={value => setPassword(value)}
                            secureTextEntry
                        />
                        </View>

                        <View style={signupStyles.inputContainer}>

                        <Text>FirstName</Text>

                        <TextInput
                            style={signupStyles.input}
                            value={firstName}
                            onChangeText={value => setFirstName(value)}
                        />
                        </View>

                        <View style={signupStyles.inputContainer}>

                        <Text>LastName</Text>

                        <TextInput
                            style={signupStyles.input}
                            value={lastName}
                            onChangeText={value => setLastName(value)}
                        />
                        </View>

                        <Button title="edit" onPress={handlePutUser}/>
                    </View>}

            </View>
            <View style={profilStyles.container}>
                <Text style={profilStyles.titre}>Mes tweets</Text>
            </View>    
            {tweets && 
                <FlatList
                    data={tweets}
                    renderItem={({item})=>
                        <>
                            <TweetCard tweet={item} link/>
                            <View style={profilStyles.buttonContainer}>
                                <Button title="edit?" onPress={()=>handlePressPut(item.id)} />
                                <Button title="delete" color="#FC7987" onPress={()=>{handlePressDelete(item.id)}}/>
                            </View>
                         </>}
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