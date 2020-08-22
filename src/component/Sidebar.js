import React from "react";
import { getState } from "../StateProvider";

import "../styles.css";

const Sidebar = () => {
  const [state, dispatch] = getState();

  const { visible, color, height, width } = state;

  const onVisibleChange = e => {
    dispatch({ type: "changeVisible", visible: e.target.checked });
  };

  const onColorChange = e => {
    dispatch({ type: "changeColor", color: e.target.value });
  };

  const handleHeightChange = e => {
    let height = parseInt(e.target.value);
    if (e.target.value === "") {
      height = 0;
    }
    if (height >= 0 && height < 1000) {
      dispatch({ type: "changeHeight", height });
    }
  };

  const handleWidthChange = e => {
    const width = parseInt(e.target.value);
    if (width >= 0 && width < 1000) {
      dispatch({ type: "changeWidth", width });
    }
  };

  return (
    <div className="sidebar">
      <h3>Settings</h3>
      <div>
        <input type="checkbox" checked={visible} onChange={onVisibleChange} />
        <span>Visible</span>
      </div>
      <br />
      <div>
        <label for="color">Color:</label>
        <select name="color" id="color" onChange={onColorChange}>
          <option value="red" selected={color === "red" ? "selected" : null}>
            Red
          </option>
          <option
            value="yellow"
            selected={color === "yellow" ? "selected" : null}
          >
            Yellow
          </option>
          <option
            value="green"
            selected={color === "green" ? "selected" : null}
          >
            green
          </option>
        </select>
      </div>
      <div>
        <span>Height</span>
        <input
          type="text"
          id="height"
          name="height"
          value={height}
          onChange={handleHeightChange}
        />
      </div>
      <br />
      <div>
        <span>Width</span>
        <input
          type="text"
          id="width"
          name="width"
          value={width}
          onChange={handleWidthChange}
        />
      </div>
      <br />
    </div>
  );
};

export default Sidebar;
