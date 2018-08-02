import React, { Component } from 'react';
import '../style.css';
import {tagCloud} from '../const';
import TagInfo from './TagInfo'

class TagWrapper extends Component {
  render() {
    const tagId = this.props.match.params.id 
    return (
      <div className="tag-info-wrap">
          {tagCloud.map((item)=>(
            item.id == tagId ?
              <TagInfo
                key={item.id}
                id={item.id}
                title={item.label}
                totalmentions={item.volume}
                separatementions={item.sentiment}
                listpages={item.pageType}
               />
              : null
            ))}
      </div>
    );
  }
}

export default TagWrapper;