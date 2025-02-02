import React from "react";
import logoImage from "../khu_logo.png"; // 로고 이미지
import GoogleLoginButton from "./loginButton";
import "./header.css";

const Header = () => {
  return (
    <div>
      {/* Header (상단바) */}
      <header className="header">
        <div className="logo-container">
          <img src={logoImage} alt="경희대학교 로고" />
          <span>경희대학교 미래인재센터 자기소개서 평가 서비스</span>
        </div>
        <div className="login">
          <div style={{ margin: 10 }}>학교 이메일 계정으로 로그인</div>
          <GoogleLoginButton />
        </div>
      </header>
    </div>
  );
};

export default Header;
