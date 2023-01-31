const User = async (token) =>{
    
    const request = await fetch('https://hzplqosigklsspekvjey.supabase.co/auth/v1/user',{
        headers:{
            apikey: process.env.API_KEY,
            Authorization: `Bearer ${token}`
        },
    })

    const response = await request.json()
    return response
    
} 

export {User}