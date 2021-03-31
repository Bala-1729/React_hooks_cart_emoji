import React, { useState } from "react";
import "./emoji.css";

export default function Emoji() {
  const [emoji, setEmoji] = useState(":)");
  const [style, setStyle] = useState("emoji_smile");

  function changeEmoji() {
    if (emoji === ":)") {
      setEmoji(":(");
      setStyle("emoji_sad");
    }
    else{
        setEmoji(':)');
        setStyle('emoji_smile');
    }
  }
  return (
    <div className="container">
      <p>Emoji toggler</p>
      <h1 className={style} onClick={changeEmoji}>
        {emoji}
      </h1>
    </div>
  );
}
