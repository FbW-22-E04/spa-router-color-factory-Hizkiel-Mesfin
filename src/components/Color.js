import "../App.css";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { colorContext } from "./Context";

const Color = () => {
  const { colorArr } = useContext(colorContext);
  const { name } = useParams();
  const navigate = useNavigate();

  const theOne = colorArr.filter((color) => color.name === name);

  const styles = {
    backgroundColor: `${theOne[0]?.value}`,
    height: "100vh",
  };

  return (
    <div style={styles}>
      <div className="color-name">
        <h1> {`This is the color ${name}`} </h1>
        <button className="go-back-btn" onClick={() => navigate("/colors")}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default Color;
