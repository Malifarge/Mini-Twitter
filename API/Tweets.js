
const FetchAllTweets = async () =>{
    
    const request = await fetch('https://hzplqosigklsspekvjey.supabase.co/rest/v1/Tweets?select=*',{
        headers:{
            apikey: process.env.API_KEY,
            Authorization: `Bearer ${process.env.API_KEY}`
        },
    })

    const response = await request.json()
    return response
    
} 

export {FetchAllTweets}