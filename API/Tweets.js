

const FetchAllTweets = async (token) =>{
    
    const request = await fetch('https://hzplqosigklsspekvjey.supabase.co/rest/v1/Tweets?select=*',{
        headers:{
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cGxxb3NpZ2tsc3NwZWt2amV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYyMzksImV4cCI6MTk5MDY1MjIzOX0.J538y4TQp5l7ni4HYgoPKLG4cmpw3TtDenKPeqtza7Y",
            Authorization: `Bearer ${token}`,
        },
    })

    const response = await request.json()
    return response
    
} 

const CreateTweet = async (body,token) =>{

        const request = await fetch('https://hzplqosigklsspekvjey.supabase.co/rest/v1/Tweets',{
        method: 'Post',
        headers:{
            apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cGxxb3NpZ2tsc3NwZWt2amV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYyMzksImV4cCI6MTk5MDY1MjIzOX0.J538y4TQp5l7ni4HYgoPKLG4cmpw3TtDenKPeqtza7Y",
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
        },
        body: JSON.stringify(body)
    })
}

const FetchTweet = async(id,token) =>{
    const request = await fetch(`https://hzplqosigklsspekvjey.supabase.co/rest/v1/Tweets?id=eq.${id}&select=*`,{
    headers:{
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cGxxb3NpZ2tsc3NwZWt2amV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYyMzksImV4cCI6MTk5MDY1MjIzOX0.J538y4TQp5l7ni4HYgoPKLG4cmpw3TtDenKPeqtza7Y",
        Authorization: `Bearer ${token}`,
    },
    })

    const response = await request.json()

    return response
}

const FetchUserTweets = async (id,token) =>{
    
    const request = await fetch(`https://hzplqosigklsspekvjey.supabase.co/rest/v1/Tweets?user_id=eq.${id}&select=*`,{
        headers:{
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cGxxb3NpZ2tsc3NwZWt2amV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYyMzksImV4cCI6MTk5MDY1MjIzOX0.J538y4TQp5l7ni4HYgoPKLG4cmpw3TtDenKPeqtza7Y",
            Authorization: `Bearer ${token}`,
        },
    })

    const response = await request.json()
    return response
    
}

const FetchPutTweet = async(id,token,body) =>{

    const request = await fetch(`https://hzplqosigklsspekvjey.supabase.co/rest/v1/Tweets?id=eq.${id}`,{
        method: "Patch",
        headers:{
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cGxxb3NpZ2tsc3NwZWt2amV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYyMzksImV4cCI6MTk5MDY1MjIzOX0.J538y4TQp5l7ni4HYgoPKLG4cmpw3TtDenKPeqtza7Y",
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
        },

        body: JSON.stringify(body)
    })
}

const FetchDeleteTweet = async(id,token)=>{
    const request = await fetch(`https://hzplqosigklsspekvjey.supabase.co/rest/v1/Tweets?id=eq.${id}`,{
        method: "Delete",
        headers:{
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cGxxb3NpZ2tsc3NwZWt2amV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYyMzksImV4cCI6MTk5MDY1MjIzOX0.J538y4TQp5l7ni4HYgoPKLG4cmpw3TtDenKPeqtza7Y",
            Authorization: `Bearer ${token}`,
        }
    })

    
}

export {FetchAllTweets,CreateTweet,FetchTweet,FetchUserTweets,FetchPutTweet,FetchDeleteTweet}