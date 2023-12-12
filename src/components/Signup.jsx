import "./css/Login.css";

const Signup = () => {
  return (
    <div className="login-page">
      <div className="logo-parent">
        <div className="logo">
          <img className="logo-child" alt="" src="/group-9466.svg" />
          <b className="procurepilot">Procurepilot</b>
        </div>
        <div className="charting-compliance-empowerin">
          Charting Compliance, Empowering Governance
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="group-item" />
        <div className="group-inner" />
        <div className="password">Password</div>
        <div className="forgot-password">Forgot Password?</div>
        <div className="password1">Password</div>
        <div className="login">Login</div>
        <div className="sign-in-wrapper">
          <div className="sign-in">Sign In</div>
        </div>
        <div className="enter-your-credentials-container">
          <span className="e">E</span>
          <span className="nter-your-credentials">
            nter your credentials to sign in!
          </span>
        </div>
        <div className="username">Username</div>
        <div className="email">Email</div>
      </div>
      <img
        className="interface-essentialclose-rect-icon"
        alt=""
        src="/interface-essentialcloserectangle.svg"
      />
      <div className="administrator-portal">Administrator Portal</div>
    </div>
  );
};

export default Signup;
