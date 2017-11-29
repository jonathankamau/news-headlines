import React from 'react';
import { PropTypes } from 'prop-types';


const NewsItems = ({props}) => {
  console.log('NewsItems', props.headlines);
  return (
     <div className='news-sources-list-wrapper'>
        {props.headlines.map(headline =>
          <div className='top-headlines-list' key={ headline.url }>
            <div className='news-sources-text'><h3>{ headline.title }</h3>
            <div><img className='top-headline-image' alt='headline-article' 
            src={headline.urlToImage}></img></div>
            <p>{ headline.description }</p>
            <a href={ headline.url } target='_blank'>Read More...</a>
            </div>
            </div>
        )}
    </div>
  );

};

NewsItems.propTypes = {  
  props: PropTypes.object.isRequired
};

export default NewsItems;  
