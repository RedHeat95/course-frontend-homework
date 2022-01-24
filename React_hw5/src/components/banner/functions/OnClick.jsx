import { useState } from "react";

import { Button } from "../button/Button";


export const OnClick = ({ category }) => {
  const [text] = useState();

  const onClick = () => {
    alert("Вы выбрали category")
  };

  return (
    <div>      
      <Button text={`${category}`}onClick={onClick} />
    </div>
  );
};