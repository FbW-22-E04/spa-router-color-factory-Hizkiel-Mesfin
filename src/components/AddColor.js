import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { colorContext } from "./Context";

const AddColor = () => {
  const navigate = useNavigate();

  const { color, setColor, setColorArr } = useContext(colorContext);

  return (
    <div className="add-color-container">
      <section className="section-add-color">
        <div>
          <input
            className="color-name-input"
            type="text"
            placeholder="put the color name"
            id="color-name"
            onChange={(e) =>
              setColor((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
        </div>
        <div className="color-value-container">
          <label className="color-value-label" htmlFor="color-value">
            Color value
          </label>
          <input
            type="color"
            name="color"
            id="color-value"
            onChange={(e) =>
              setColor((prev) => ({
                ...prev,
                value: e.target.value,
              }))
            }
          />
        </div>
        <button
          className="add-color"
          onClick={() => {
            setColorArr((prev) => [...prev, color]);
            navigate("/colors");
          }}
        >
          Add this color
        </button>
      </section>
    </div>
  );
};

export default AddColor;
