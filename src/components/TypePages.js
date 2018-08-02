import React, { Component } from 'react';
import '../style.css';

class TypePages extends Component {
  render() {
    const { blog, facebook, forum, general, image, news, review, twitter, video} = this.props;
    return (
      <div className="type-pages-info">
          <span className="tag-mentions-info">Blog: {blog}</span>
          <span className="tag-mentions-info">Facebook: {facebook}</span>
          <span className="tag-mentions-info">Forum: {forum}</span>
          <span className="tag-mentions-info">General: {general}</span>
          <span className="tag-mentions-info">Image: {image}</span>
          <span className="tag-mentions-info">News: {news}</span>
          <span className="tag-mentions-info">Review: {review}</span>
          <span className="tag-mentions-info">Twitter: {twitter}</span>
          <span className="tag-mentions-info">Video: {video}</span>
      </div>
    );
  }
}

export default TypePages;