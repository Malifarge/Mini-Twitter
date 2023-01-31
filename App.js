import { NativeRouter, Route, Routes } from 'react-router-native';
import Nav from './Components/Nav';
// import { UserContextProvider } from './Context/User';
import Home from './Route/Home';
import Login from './Route/Login';

const App = () => {
  return (
    <NativeRouter>
      {/* <UserContextProvider> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Nav/>
      {/* </UserContextProvider> */}
    </NativeRouter>
  );
}

export default App