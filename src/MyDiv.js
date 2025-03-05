import { useState } from "react";

const MyDiv = () => {
  const [color, setColor] = useState("");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        gap: 10,
      }}
    >
      <div
        style={{
          border: "1px solid",
          width: 300,
          height: 300,
          backgroundColor: color,
        }}
      ></div>
      <input
        type="text"
        style={{ width: 294 }}
        onChange={(event) => setColor(event.target.value)}
      />
    </div>
  );
};

export default MyDiv;
