
const CreateUSer = async(body) =>{
    const request = await fetch('https://hzplqosigklsspekvjey.supabase.co/auth/v1/signup',
        {
            method: 'Post',
            headers:{
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cGxxb3NpZ2tsc3NwZWt2amV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYyMzksImV4cCI6MTk5MDY1MjIzOX0.J538y4TQp5l7ni4HYgoPKLG4cmpw3TtDenKPeqtza7Y",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const response = await request.json()
         return response
}

const LogUSer = async(body)=>{
    const request = await fetch('https://hzplqosigklsspekvjey.supabase.co/auth/v1/token?grant_type=password',
    {
        method: 'Post',
        headers:{
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cGxxb3NpZ2tsc3NwZWt2amV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYyMzksImV4cCI6MTk5MDY1MjIzOX0.J538y4TQp5l7ni4HYgoPKLG4cmpw3TtDenKPeqtza7Y",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const response = await request.json()
    return response
}


const User = async (token) =>{
    
    const request = await fetch('https://hzplqosigklsspekvjey.supabase.co/auth/v1/user',{
        headers:{
            apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cGxxb3NpZ2tsc3NwZWt2amV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzYyMzksImV4cCI6MTk5MDY1MjIzOX0.J538y4TQp5l7ni4HYgoPKLG4cmpw3TtDenKPeqtza7Y",
            Authorization: `Bearer ${token}`
        },
    })

    const response = await request.json()
    return response
    
} 

export {CreateUSer,User,LogUSer}