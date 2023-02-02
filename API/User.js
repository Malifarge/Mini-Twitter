import { APIKEY } from "@env";

const CreateUSer = async(body) =>{
    const request = await fetch('https://hzplqosigklsspekvjey.supabase.co/auth/v1/signup',
        {
            method: 'Post',
            headers:{
                apikey: APIKEY,
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
            apikey: APIKEY,
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
            apikey:APIKEY,
            Authorization: `Bearer ${token}`,
        },
    })

    const response = await request.json()
    return response
    
} 

const PutUser = async (token,body) =>{
    const request = await fetch('https://hzplqosigklsspekvjey.supabase.co/auth/v1/user',{
        method: 'Put',
        headers:{
            apikey:APIKEY,
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}

export {CreateUSer,User,LogUSer,PutUser}