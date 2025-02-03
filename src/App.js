import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Homepage from "./component/homepage";
import NoticeBoard from "./component/noticeBoard"; // Add the component for 공지사항
import MyInfo from "./component/myInfo"; // Add the component for 내 정보
import SelfIntroduction from "./component/selfIntroduction"; // Add the component for 자기소개서 입력
import SelfIntroductionReview from "./component/selfIntroductionReview"; // Add the component for 자기소개서 평가

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <div className="container">
          <Header />
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/noticeboard" element={<NoticeBoard />} />
              <Route path="/myinfo" element={<MyInfo />} />
              <Route path="/selfintroduction" element={<SelfIntroduction />} />
              <Route
                path="/selfintroductionreview"
                element={<SelfIntroductionReview />}
              />
            </Routes>
          </main>
        </div>
      </Provider>
    </Router>
  );
};

export default App;
