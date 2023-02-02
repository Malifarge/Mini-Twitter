/* eslint-disable react-hooks/exhaustive-deps */


import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useEffect, useState } from 'react'
import { User } from '../API/User'

const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    myLocalToken()
  }, [])

    const myLocalToken = async()=>{
        try{
          const localToken = await AsyncStorage.getItem('token')
          if (localToken) {
            setToken(localToken)
          }
        }catch(e){
          console.log(e);
        }
    }

  useEffect(() => {
    setUserWithToken()
  }, [token])

    const setUserWithToken= async() =>{
        if (token) {
           try{
            await AsyncStorage.setItem('token', token)
            getUser()
           }catch(e){
            console.log(e);
          }
          }
    }

  const getUser = async () => {
    const userResponse = await User(token)
    setUser(userResponse)
  }

  const logout = async() => {
    try {
      await AsyncStorage.removeItem('token')
      setUser(null)
    } catch (e) {
      console.log(e);
    }
  }

  const value = {
    setToken,
    user,
    logout,
    setUser,
    token
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { UserContext, UserContextProvider }