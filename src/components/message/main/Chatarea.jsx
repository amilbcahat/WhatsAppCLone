import React from "react";
import Inputarea from "./Inputarea";
import SendMsg from "./SendMsg";
import RecieveMsg from "./RecieveMsg";
import { useEffect, useReducer, useState } from "react";
// import { useSelector } from "react-redux";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  recieverReducer,
  messagesReducer,
  selectedChatReducer,
} from "./../../../functions/reducers";
import { useSelector, useDispatch } from "react-redux";
import ScrollableFeed from "react-scrollable-feed";
const ENDPOINT = "http://localhost:3100";
import io from "socket.io-client";
var socket, selectedChatCompare;
socket = io(ENDPOINT);
function Chatarea({ username }) {
  // const dispatch = useDispatch();

  const { user } = useSelector((state) => ({ ...state }));
  const [messages, setMessages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [istyping, setIsTyping] = useState(false);
  const [selectedChat, setSelectedChat] = useState("");

  useEffect(() => {
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare !== newMessageRecieved.chat.id
      ) {
        //Give notifications
      }

      setMessages([...messages, newMessageRecieved]);
      console.log("Message recieved");
      console.log(messages);
    });

    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));
  });

  const [{ loading, error, reciever }, dispatch] = useReducer(recieverReducer, {
    loading: false,
    reciever: {},
    error: "",
  });

  const fetchReciever = async () => {
    if (!username) return;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "access-control-allow-origin": "http://localhost:3000",
          "Access-Control-Allow-Credentials": "true",
        },
        // WithCredential: true,
      };

      // setLoading(true);
      dispatch({
        type: "RECIEVER_REQUEST",
      });

      const { data } = await axios.get(
        `http://localhost:3100/api/v1/users/${username}`,
        config
      );
      dispatch({
        type: "RECIEVER_SUCCESS",
        payload: data.data,
      });

      // setLoading(false);
      // setOtherUser(data.data);
      // console.log(otherUser);
      // socket.emit("join chat", selectedChat._id);
    } catch (error) {
      console.log(error.response.data.message);
      dispatch({
        type: "RECIEVER_ERROR",
        payload: error.response.data.message,
      });
    }
  };

  const fetchMessages = async () => {
    if (!username) return;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Access-Control-Allow-Credentials": "true",
          "access-control-allow-origin": "*",
        },
        WithCredentials: true,
      };

      // setLoading(true);

      const { data } = await axios.get(
        `http://localhost:3100/api/v1/users/${username}/message`,
        config
      );

      // setLoading(false);
      setMessages(data.data.data);
      // console.log(messages);
      // socket.emit("join chat", selectedChat._id);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const fetchChat = async () => {
    if (!username) return;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Access-Control-Allow-Credentials": "true",
          "access-control-allow-origin": "*",
        },
        WithCredentials: true,
      };

      // setLoading(true);

      const { data } = await axios.get(
        `http://localhost:3100/api/v1/chat/users/${username}`,
        config
      );

      // setLoading(false);

      // console.log(data.chatId);
      setSelectedChat(data.chatId);
      console.log(selectedChat);
      socket.emit("join chat", selectedChat);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  useEffect(() => {
    fetchReciever();
    fetchMessages();
    //In fetchChat we will also initialize socket
    fetchChat();

    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  // console.log(reciever);
  // console.log(messages);

  return (
    <div className="col-md-6 chatarea">
      <div className="userDetail">
        <div className="username">
          {!loading ? (
            <div className="useractualname">{reciever?.name}</div>
          ) : (
            <Skeleton />
          )}
          <div className="userid">@{reciever?.username}</div>
        </div>
        <div>Important Messages</div>
      </div>
      <div className="message">
        <ScrollableFeed>
          {messages ? (
            messages.map(
              (m, i) =>
                m.sender[0].username === user.username ? (
                  <div className="outgoing">
                    <SendMsg content={m.content} key={m.id} />
                  </div>
                ) : (
                  <div className="incoming">
                    <RecieveMsg content={m.content} key={m.id} />
                  </div>
                )

              // console.log(m.sender[0].username)
            )
          ) : (
            <Skeleton />
          )}

          {istyping ? (
            <div className="incoming">
              <RecieveMsg content="Typing..." />
            </div>
          ) : (
            <></>
          )}
        </ScrollableFeed>
      </div>
      <div className="inputarea">
        <div style={{ width: "100%" }}>
          <Inputarea
            socket={socket}
            messages={messages}
            setMessages={setMessages}
            username={username}
            socketConnected={socketConnected}
            setSocketConnected={setSocketConnected}
            selectedChat={selectedChat}
            typing={typing}
            setTyping={setTyping}
            istyping={istyping}
            setIsTyping={setIsTyping}
            reciever={reciever}
          />
        </div>
      </div>
    </div>
  );
}

export default Chatarea;
