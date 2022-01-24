import { useState } from "react";

import { ButtonLike } from "../button/Button";

export const OnClickLike = () => {
  const [text] = useState(0);

  const onClick = () => {
    alert("Вы поставили Like!")
  };

  return (
    <div>      
      <ButtonLike text={"Like"} onClick={onClick} />
    </div>
  );
};
