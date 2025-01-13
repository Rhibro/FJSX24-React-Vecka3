import './App.css';
import Header from './components/Header/Header.jsx';
import Greeting from './components/Greeting/Greeting.jsx';
import Footer from './components/Footer/Footer.jsx';
import List from './components/List/List.jsx';

function App() {

  return (
    <>
      <Header />
      <main>
      <Greeting />
      <List />
      </main>
      <Footer />
    </>
  )
}

export default App
