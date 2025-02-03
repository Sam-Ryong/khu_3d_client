import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./myinfo.css"; // 스타일을 외부 CSS 파일로 관리

const MyInfo = () => {
  const { email } = useSelector((state) => state.user); // Redux 상태에서 email 가져오기
  const [dataList, setDataList] = useState([]); // API 응답 데이터를 저장할 상태

  useEffect(() => {
    axios
      .get("/my-eval", {
        params: {
          email: email,
        },
        withCredentials: true,
      })
      .then((response) => {
        setDataList(response.data); // 응답 데이터를 dataList 상태에 저장
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="my-info-container">
      <h1 className="title">내 정보</h1>
      {/* 리스트 데이터 렌더링 */}
      <div className="data-list">
        {dataList.length > 0 ? (
          <ul>
            {dataList.map((item) => (
              <li key={item.id} className="data-item">
                {/* 카드 스타일로 항목 데이터를 렌더링 */}
                <div className="card">
                  <p>
                    <strong>Name:</strong> {item.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {item.email}
                  </p>
                  <p>
                    <strong>Created At:</strong>{" "}
                    {new Date(item.createdAt).toLocaleString()}
                  </p>
                  <p>
                    <strong>Eval:</strong> {item.eval}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>데이터가 없거나, 로그인을 해야 합니다.</p>
        )}
      </div>
    </div>
  );
};

export default MyInfo;
