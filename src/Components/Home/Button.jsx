import { AwesomeButton } from "react-awesome-button";
// import "react-awesome-button/dist/styles.css";
import "../Home/styles.css";
import { AwesomeButtonShare } from "react-awesome-button";

function Button() {
  return (
    <div>
      <AwesomeButton className="aws-btn" type="primary">
        Button
      </AwesomeButton>
      <AwesomeButtonShare type="github" href="https://github.com/username">
        GitHub
      </AwesomeButtonShare>
    </div>
  );
}

export default Button;
