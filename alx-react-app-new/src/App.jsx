import UserProfile from './components/UserProfile'
import Header from './Components/Header';
import MainContent from './Components/MainContent'; 
import Footer from './Components/Footer';
import Counter from './Components/Counter';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <Counter />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography"/>

    </div>
    
  )
}

export default App