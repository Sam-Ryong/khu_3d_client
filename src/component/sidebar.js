import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <Link to="/">
          <li>
            <i className="icon-announcement"></i> ⭐ 서비스 소개
          </li>
        </Link>
        <Link to="/noticeboard">
          <li>
            <i className="icon-timetable"></i> 📢 공지사항
          </li>
        </Link>
        <Link to="/myinfo">
          <li>
            <i className="icon-wishlist"></i> 👤 내 정보
          </li>
        </Link>
        <Link to="/selfintroduction">
          <li>
            <i className="icon-history"></i> 📝 자기소개서 입력
          </li>
        </Link>
        <Link to="/selfintroductionreview">
          <li>
            <i className="icon-register"></i> ✔️ 자기소개서 평가
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Sidebar;
