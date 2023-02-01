

const FetchAllTweets = async () =>{
    
    const request = await fetch('https://hzplqosigklsspekvjey.supabase.co/rest/v1/Tweets?select=*',{
        headers:{
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cGxxb3NpZ2tsc3NwZWt2amV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYyMzksImV4cCI6MTk5MDY1MjIzOX0.J538y4TQp5l7ni4HYgoPKLG4cmpw3TtDenKPeqtza7Y",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cGxxb3NpZ2tsc3NwZWt2amV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYyMzksImV4cCI6MTk5MDY1MjIzOX0.J538y4TQp5l7ni4HYgoPKLG4cmpw3TtDenKPeqtza7Y`
        },
    })

    const response = await request.json()
    return response
    
} 

export {FetchAllTweets}