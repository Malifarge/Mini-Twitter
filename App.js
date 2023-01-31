import { NativeRouter, Route, Routes } from 'react-router-native';
import Nav from './Components/Nav';
import Home from './Route/Home';
import Login from './Route/Login';

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Nav/>
    </NativeRouter>
  );
}

export default App