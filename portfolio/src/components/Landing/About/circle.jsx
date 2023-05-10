import "./circle.scss";
import { useState } from "react";
const Circle = ({ props }) => {
  const [isClicked, setIsClicked] = useState(false);
  const describe = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="circle" onClick={describe}>
      <div className="circle_letter">{props.letter}</div>
      {isClicked == true ? (
        <div className="circle_description">
          <div className="circle_description_title">{props.title}</div>
          <div className="circle_description_content">{props.content}</div>
        </div>
      ) : null}
    </div>
  );
};
export default Circle;
