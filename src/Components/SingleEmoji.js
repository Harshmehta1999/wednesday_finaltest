import React from "react";



class SingleEmoji extends React.Component {
  render() {
    return (
      <div style={{border:"2px dotted white", margin:"20px"}}>
     
        <p>
            {this.props.title}
        </p>
        <p>
            {this.props.keyword}
        </p>
        <p>
            {this.props.symbol}
        </p>
        

      </div>
    );
  }
}

export default SingleEmoji;
