import React, { Component } from 'react';
import '../style.css';
import TagSeparateMentions from './TagSeparateMentions'
import TypePages from './TypePages'

class TagInfo extends Component {
  render() {
    const { id, title, totalmentions, separatementions, listpages} = this.props;
    const mentions = Object.keys(separatementions).length 
    const typepages = Object.keys(listpages).length 
    return (
      <div className="">    
        <h2 className="tag-title">Label: <span>{title}</span></h2>
        <div className="tag-mentions-wrap">
	        <span className="tag-mentions-info">Total Mentions: {totalmentions}</span>
          {mentions > 0 ?
          <TagSeparateMentions
            key= {id +356} 
            negative={separatementions.negative}
            neutral={separatementions.neutral}
            positive={separatementions.positive}
           />
          : <span>No any mentions</span>
          }	       
	      </div>
        <h3>List of page types</h3>
          {typepages > 0 ?
          <TypePages
            key= {id +156} 
            blog={listpages.blog}
            facebook={listpages.facebook}
            forum={listpages.forum}
            general={listpages.general}
            image={listpages.image}
            news={listpages.news}
            review={listpages.review}
            twitter={listpages.twitter}
            video={listpages.video}
           />
          : <span>No any list of page types</span>
          }
      </div>
    );
  }
}

export default TagInfo