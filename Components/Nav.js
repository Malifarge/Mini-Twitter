import {  View, Text } from 'react-native'
import { Link } from 'react-router-native'
import navStyles from '../Styles/Nav'


const Nav = () => {
  return (
    <View style={navStyles.bottomBar}>
      <Link to='/'>
        <Text style={navStyles.text}>Home</Text>
      </Link>
      <Link to='/Profil'>
        <Text style={navStyles.text}>Profil</Text>
      </Link>
    </View>
  )
}

export default Nav