import React, { Component } from 'react';
import '../style.css'
import {Link, BrowserRouter}  from 'react-router-dom';

class SingleTag extends Component {
  render() {
    const {text, size, id} = this.props
    const tagStyle = {
      fontSize: size/2 + 'px',
    }
    return (
      <p className="tag-wrap" style={tagStyle}>
      		<Link to={`/${id}`} className="link-style">{text}</Link>
      </p>
    );
  }
}

export default SingleTag;