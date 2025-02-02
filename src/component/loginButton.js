import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // 수정된 부분
import axios from "axios"; // axios import

const GoogleLoginButton = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const handleLoginSuccess = (res) => {
    const token = res.credential;
    const decodedToken = jwtDecode(token); // Decode the JWT token
    console.log("name:", decodedToken.name); // User information
    console.log("email:", decodedToken.email); // User information

    // Send POST request to the API server using axios
    axios
      .post(
        process.env.REACT_APP_API_SERVER_LOGIN_URL,
        {
          name: decodedToken.name,
          email: decodedToken.email,
        },
        {
          withCredentials: true, // 쿠키를 포함시킬 수 있도록 설정
        }
      )
      .then((response) => {
        console.log(response);
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Send GET request using axios (you can't send a body with GET requests, so we can send params instead)
    axios
      .get(process.env.REACT_APP_API_SERVER_GET_MY_EVAL_URL, {
        params: {
          email: decodedToken.email,
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
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
