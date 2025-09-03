import UserProfile from './components/UserProfile'
import Header from './Components/Header';
import MainContent from './Components/MainContent'; 
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <WelcomeMessage/>
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography"/>

    </div>
    
  )
}

export default App