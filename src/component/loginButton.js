// src/GoogleLoginButton.js
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useDispatch } from "react-redux"; // useDispatch import
import { setUser } from "../redux/userSlice"; // 액션 임포트

const GoogleLoginButton = () => {
  const dispatch = useDispatch(); // Redux dispatch 훅
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const handleLoginSuccess = (res) => {
    const token = res.credential;
    const decodedToken = jwtDecode(token);

    // Redux에 사용자 정보 저장
    dispatch(setUser({ name: decodedToken.name, email: decodedToken.email }));

    // Send POST request to the API server using axios
    axios
      .post(
        "/login",
        {
          name: decodedToken.name,
          email: decodedToken.email,
        },
        {
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

  const handleLoginFailure = (err) => {
    console.log(err);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        type="icon"
        size="large"
        text="continue_with"
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
