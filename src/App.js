import logo from './logo.svg';
import './App.css';
import Authentication from './components/Authentication/Authentication';
import useFirebase from './Hooks/useFirebase';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import useAuth from './Hooks/useAuth';
import ViewJob from './components/ViewJob/ViewJob';
import UpdateJob from './components/UpdateJob/UpdateJob';
import Navbar from './components/Navbar/Navbar';

function App() {
  const { user } = useFirebase();
  // console.log(useAuth())
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          {user.email ? <div> <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home />}></Route>

              <Route path="/details/:id" element={<ViewJob />}></Route>
              <Route path="/jobs/:id" element={<UpdateJob />}></Route>
            </Routes> </div> : <Authentication></Authentication>}
          <Routes>
            <Route path="/login" element={<Authentication></Authentication>}></Route>
          </Routes>

        </BrowserRouter>


      </AuthProvider>

    </div>
  );
}

export default App;
