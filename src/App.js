/*eslint-disable*/
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Message from "./components/Message";
import Bookmark from "./components/Bookmark";
import UserProfile from "./components/UserProfile";
import Error from "./components/Error";
import AcadhutNavbar from "./components/AcadhutNavbar";
import Login from "./pages/login";
import { useSelector } from "react-redux";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";

function App() {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <>
      {/* <AcadhutNavbar /> */}
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/message" element={<Message />} />
          <Route path="/message/:username" element={<Message />} />

          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<Error />} />
        </Route>

        {/* <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
