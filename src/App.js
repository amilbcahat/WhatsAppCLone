import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Message from './components/Message';
import Bookmark from './components/Bookmark';
import UserProfile from './components/UserProfile';
import Error from './components/Error';
import AcadhutNavbar from './components/AcadhutNavbar';
function App() {
  return (
    <>
      <AcadhutNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
