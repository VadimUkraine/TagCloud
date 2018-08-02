import React, { Component } from 'react';
import '../style.css';

class TagSeparateMentions extends Component {
  render() {
    const { negative = 0, neutral = 0, positive =0} = this.props;
    return (
      <div className="mentions-wrap">
          <span className="tag-mentions-info">Positive Mentions: {positive}</span>
          <span className="tag-mentions-info">Neutral Mentions: {neutral}</span>
          <span className="tag-mentions-info">Negative Mentions: {negative}</span>
      </div>
    );
  }
}

export default TagSeparateMentions;