import React from "react";
import "./index.js";
import { useEffect, useRef, useState } from "react";
import Picker from "emoji-picker-react";
import { useSelector } from "react-redux";
import axios from "axios";
import Lottie from "lottie-react";
import animationData from "../../../animations/typing.json";

function Inputarea({
  typing,
  setTyping,
  istyping,
  setIsTyping,
  socketConnected,
  setSocketConnected,
  socket,
  username,
  setMessages,
  messages,
  selectedChat,
  reciever,
}) {
  const { user } = useSelector((state) => ({ ...state }));
  const [newMessage, setNewMessage] = useState("");
  const [picker, setPicker] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [commentImage, setCommentImage] = useState("");
  const [cursorPosition, setCursorPosition] = useState("");

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  const textRef = useRef(null);
  const imgInput = useRef(null);
  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);
  const handleEmoji = (e, { emoji }) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText);

    setCursorPosition(start.length + emoji.length);
  };
  console.log(text);

  const sendMessage = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      // console.log(newMessage);
      const { data } = await axios.post(
        `http://localhost:3100/api/v1/users/${username}/message`,
        {
          content: newMessage,
        },
        config
      );
      setNewMessage("");
      await socket.emit("new message", data.data.data[0]);
      // console.log(data.data.data);
      setMessages([...messages, data.data.data[0]]);

      // messages.push(data.data.data[0]);
      // console.log(messages);
      // console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const typingHandler = (e) => {
    setNewMessage(e.target.value);

    if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 3000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", selectedChat);
        setTyping(false);
      }
    }, timerLength);
  };
  // console.log(newMessage);
  return (
    <>
      <div className="chat-wrapper">
        <div className="message-wrapper">
          <input
            type="text"
            ref={textRef}
            value={newMessage}
            className="message-text"
            id="#mydiv"
            onChange={typingHandler}
            onKeyPress={(e) => {
              e.key === "Enter" && sendMessage();
            }}
          ></input>
          <div className="send" onClick={sendMessage} sty>
            <i class="fa-solid fa-paper-plane-top"></i>
          </div>
          <div
            className="emoji"
            // onClick={() => {
            //   setPicker((prev) => !prev);
            // }}
          >
            {picker && <Picker onEmojiClick={handleEmoji} />}
          </div>
          <div className="media">a</div>
        </div>
      </div>
    </>
  );
}

export default Inputarea;
