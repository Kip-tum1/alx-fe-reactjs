import ProfilePage from './ProfilePage';
import {UserContext} from './components/UserContext';


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div>
      <UserContext />
      <userContext.Provider value={userData}>
        <ProfilePage />
      </userContext.Provider>      
    </div>
  )
}

export default App;