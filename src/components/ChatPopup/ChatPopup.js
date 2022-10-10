import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useState, useEffect } from "react";

import "./ChatPopup.css";
function PopoverPositionedExample({ buttonName, counselorImg, docName }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([
    { message: "hy", time: "12:29" },
    { message: "testing", time: "12:29" },
  ]);

  const sendMessage = async (e) => {
    if (currentMessage !== "") {
      const messageData = {
        // room: room,
        // author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      // await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };
  // useEffect(() => {
  //   socket.on("receive_message", (data) =>
  //     setMessageList((list) => [...list, data])
  //   );
  // }, [socket]);
  const popover = (
    <Popover id="popover-basic" className="popover">
      <Popover.Header as="h3">
        <img
          src={counselorImg}
          alt=""
          style={{ width: "25px", height: "25px", borderRadius: "100%" }}
        />
        {docName}
      </Popover.Header>
      <Popover.Body className="chat-content">
        <div className="messageContent">
          {messageList.map((msg, idx) => {
            return (
              <div className="message" key={idx}>
                <p>{msg.message}</p>
              </div>
            );
          })}
        </div>
        <div className="text-typing-area">
          <textarea
            name=""
            id=""
            cols="25"
            rows="2"
            value={currentMessage}
            onChange={(e) => {
              setCurrentMessage(e.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
            placeholder="Type here..."
          ></textarea>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-send ms-2"
            viewBox="0 0 16 16"
            onClick={sendMessage}
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
          </svg>
        </div>
      </Popover.Body>
    </Popover>
  );
  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <Button className="btn  btn-round-full fs-1 w-50">{buttonName}</Button>
    </OverlayTrigger>
  );
}

export default PopoverPositionedExample;
