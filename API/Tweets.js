
import { API_KEY } from 'react-native-dotenv'

const FetchAllTweets = async () =>{

    console.log(API_KEY)
    
    const request = await fetch('https://hzplqosigklsspekvjey.supabase.co/rest/v1/Tweets?select=*',{
        headers:{
            apikey: API_KEY,
            Authorization: `Bearer ${API_KEY}`
        },
    })

    const response = await request.json()
    return response
    
} 

export {FetchAllTweets}