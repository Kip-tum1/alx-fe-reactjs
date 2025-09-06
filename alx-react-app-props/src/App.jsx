import ProfilePage from './ProfilePage';
import {UserContext} from './UserContext';


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div>
      <UserContext/>
      <username.Provider value={userData}>
        <ProfilePage />
      </username.Provider>      
    </div>
  )
}

export default App;