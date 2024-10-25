import './App.css'
import AuthRoutes from './components/AuthRoutes';
import UnAuthRoutes from './components/UnAuthRoutes';

function App() {

  const [user, setUser] = useState(false);

  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        { user ? <AuthRoutes /> : <UnAuthRoutes/> }
      </UserContext.Provider>
    </>
  )
}

export default App
