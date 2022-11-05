import "../App.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { colorContext } from "./Context";

const Home = () => {
  const navigate = useNavigate();

  const { colorArr } = useContext(colorContext);

  const { name } = useParams();

  return (
    <div>
      <header className="nav">
        <h1 className="heading">Welcome to the color factory </h1>
        <button
          className="add-color-btn"
          onClick={() => navigate("/colors/new")}
        >
          Add a color
        </button>
      </header>
      <main>
        {colorArr.length > 0 ? (
          <h2 className="sec-heading">Please choose a color</h2>
        ) : (
          ""
        )}
        <ul className="list">
          {colorArr.map((color, idx) => (
            <li key={idx} onClick={() => navigate(`/${color.name}`)}>
              {color.name}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
