import { useState } from 'react';
import './App.css'
import AuthRoutes from './components/AuthRoutes';
import UnAuthRoutes from './components/UnAuthRoutes';
import UserContext from './contexts/UserContext';
import { ThemeProvider } from './components/theme-provider';

function App() {

  const [user, setUser] = useState({_id: "dfljasf", name: "Aatmaj Rakshe", phone: "6969696969", email:"boobybooby69@hotmail.com"});

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <UserContext.Provider value={{user, setUser}}>
        { user ? <AuthRoutes /> : <UnAuthRoutes/> }
      </UserContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
