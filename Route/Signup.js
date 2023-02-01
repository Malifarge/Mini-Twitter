import { useContext, useEffect, useState } from "react"
import { Button, Text, TextInput, View } from "react-native"
import { useNavigate } from "react-router-native"
import { CreateUSer } from "../API/User"
import { UserContext } from "../Context/User"
import signupStyles from "../Styles/Signup"

export default Signup = () =>{

    const {user,setUser} = useContext(UserContext)

    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')

    const navigate = useNavigate()

    useEffect(()=>{
        if(user){
            navigate('/')
        }
    },[user])

    const handleSubmit = async() =>{

        const body = {
            email,
            password,
            data:{
                firstName,
                lastName,
            }
        }

        const response = await CreateUSer(body)

        setUser(response)
        
    }

    return(
        <View style={signupStyles.signupContainer}>
            <Text style={signupStyles.Titre}>Signup</Text>
            
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

            <Button title="Sign" onPress={handleSubmit}/>

        </View>
    )
}