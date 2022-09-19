import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Message from './components/Message';
import Bookmark from './components/Bookmark';
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes> 
    </>
  );
}

export default App;
