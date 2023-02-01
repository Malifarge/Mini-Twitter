/* eslint-disable react-hooks/exhaustive-deps */

// import AsyncStorage from '@react-native-community/async-storage'
import { createContext, useEffect, useState } from 'react'
import { User } from '../API/User'

const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   myLocalToken()
  // }, [])

  //   const myLocalToken = async()=>{
  //       const localToken = await AsyncStorage.getItem('token')

  //   if (localToken) {
  //     setToken(localToken)
  //   }
  //   }

  useEffect(() => {
    setUserWithToken()
  }, [token])

    const setUserWithToken= async() =>{
        if (token) {
          //  await AsyncStorage.setItem('token', token)
            getUser()
          }
    }

  const getUser = async () => {
    const userResponse = await User(token)
    setUser(userResponse)
  }

  const logout = async() => {
    // await AsyncStorage.removeItem('token')
    setUser(null)
  }

  const value = {
    setToken,
    user,
    logout,
    setUser
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { UserContext, UserContextProvider }