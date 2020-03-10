import React from "react";

import emojiList from '../emojis.json'
import SingleEmoji from "./SingleEmoji.js";

class Emoji extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
      <h1>Emojis are go</h1>

      { emojiList.map( (elements, i) => {
        
          return  <SingleEmoji  key={i} symbol={elements.symbol} keywords={elements.keywords} title={elements.title}/> 
      } )}
      </div>
    );
  }
}

export default Emoji;
