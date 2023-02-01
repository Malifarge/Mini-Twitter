import { NativeRouter, Route, Routes } from 'react-router-native';
import { Header } from './Components/Header';
import Nav from './Components/Nav';
import { UserContextProvider } from './Context/User';
import Home from './Route/Home';
import Login from './Route/Login';
import Signup from './Route/Signup';
import { Tweet } from './Route/Tweet';

const App = () => {
  return (
    <NativeRouter>
      <UserContextProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/Tweet/:id' element={<Tweet/>}/>
        </Routes>
        <Nav/>
      </UserContextProvider>
    </NativeRouter>
  );
}

export default App