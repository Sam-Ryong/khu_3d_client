import React, { useEffect, useState } from "react";
import axios from "axios";
import "./selfIntroductionReview.css"; // Import external CSS for styling

const SelfIntroductionReview = () => {
  const [member, setMember] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEvalComplete, setIsEvalComplete] = useState(false);

  useEffect(() => {
    axios
      .get("/my-info", {
        withCredentials: true,
      })
      .then((response) => {
        setMember(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleEval = () => {
    setIsLoading(true);

    axios
      .post(
        "/eval",
        {
          profile: member.profile,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("Evaluation submitted:", response.data);
        setIsEvalComplete(true);
      })
      .catch((error) => {
        console.error("Error submitting evaluation:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (!member) {
    return <p>Loading...</p>;
  }

  return (
    <div className="hero">
      <h1>EXPERIENCE KYUNG HEE!</h1>
      <p className="intro-text">
        실패를 두려워하지 않는 용기를 가지고, 청춘은 마음껏 뛰놀기 바랍니다.
      </p>

      <div className="member-info">
        <h2>{member.name}</h2>
        <p>
          <strong>Email:</strong> {member.email}
        </p>
        <p>
          <strong>Profile:</strong> {member.profile}
        </p>
        <p>
          <strong>Count:</strong> {member.count}
        </p>
      </div>

      <button onClick={handleEval} className="eval-button">
        평가하기
      </button>

      {/* 평가 진행중 모달 */}
      {isLoading && (
        <div className="modal">
          <div className="modal-content">
            <h2>평가 진행중입니다...</h2>
          </div>
        </div>
      )}

      {/* 평가 완료 모달 */}
      {isEvalComplete && (
        <div className="modal">
          <div className="modal-content">
            <h2>평가가 완료되었습니다!</h2>
            <button
              onClick={() => setIsEvalComplete(false)}
              className="close-button"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelfIntroductionReview;
