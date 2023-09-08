// import {  useState } from "react"
// import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

// type LandingPagesProps = {
//    Login: ReactNode;
//    Signup: ReactNode;
//    bool: boolean;
//    isLoginClick: () => void;
// }

export const LandingPage = () => {
  // const [isLogin, setIsLogin] = useState(false);

  //use the as
  // const {isLogin, setIsLogin} = useAuth();

  return (
    <div className="w-screen h-screen text-red-500">
      <div className="welcomeUser" style={{}}>
        <h1>Hello! Would you like some coffee?</h1>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {/* you want to div deep into the react router */}
          <Link
            to="login"
            style={{
              border: "1px solid transparent",
              padding: "0.6em 1.2em",
              cursor: "pointer",
              transition: "border-color 0.25s",
            }}
          >
            Login
          </Link>
          <Link to="signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};
