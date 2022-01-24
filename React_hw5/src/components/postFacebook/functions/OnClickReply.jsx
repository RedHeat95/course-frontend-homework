import { useState } from "react";

import { ButtonReply } from "../button/Button";

export const OnClickReply = () => {
  const [text] = useState(0);

  const onClick = () => {
    alert("Вы оставили Reply!")
  };

  return (
    <div>      
      <ButtonReply text={"Reply"} onClick={onClick} />
    </div>
  );
};