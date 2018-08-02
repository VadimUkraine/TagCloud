import React, { Component } from 'react';
import SingleTag from './components/SingleTag'
import './style.css'
import {tagCloud} from './const';

class App extends Component {
  render() {

    return (
      	<div className="wrap">
	      	{tagCloud.map((cloud) => (
	            <SingleTag
	               key={cloud.id}
	               text={cloud.label}
	               size={cloud.sentimentScore}
	               id={cloud.id}
	           />
	        ))}
        </div>
    );
  }
}
export default App;