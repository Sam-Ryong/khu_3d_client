import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <i className="icon-announcement"></i> ⭐ 서비스 소개
        </li>
        <li>
          <i className="icon-timetable"></i> 📢 공지사항
        </li>
        <li>
          <i className="icon-wishlist"></i> 👤 내 정보
        </li>
        <li>
          <i className="icon-history"></i> 📝 자기소개서 입력
        </li>
        <li>
          <i className="icon-register"></i> ✔️ 자기소개서 평가
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
