import React, { useState } from "react";
import axios from "axios";
import "./homepage.css";

const SelfIntroduction = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from reloading the page
    axios
      .post(
        "/input",
        JSON.stringify({ profile: input }), // JSON 형식으로 데이터 전송
        {
          headers: {
            "Content-Type": "application/json", // Content-Type을 application/json으로 설정
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="hero">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="자기소개를 입력하세요"
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
};

export default SelfIntroduction;
