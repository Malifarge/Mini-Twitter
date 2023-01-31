import { StyleSheet, View, Text } from 'react-native'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  bottomBar: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    paddingBottom: 10
  }
})

const Nav = () => {
  return (
    <View style={styles.bottomBar}>
      <Link to='/'>
        <Text>Home</Text>
      </Link>
      <Link to='/login'>
        <Text>Login</Text>
      </Link>
    </View>
  )
}

export default Nav