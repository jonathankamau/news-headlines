import React from 'react';
import { PropTypes } from 'prop-types';

const DashboardItems = ({sources}) => {
  console.log(sources.sources);
  return (
     <div className='news-sources-list-wrapper'>
        {sources.sources.map(source =>
          <div className='news-sources-list' key={ source.id }>
            <div><img className='news-source-logo' 
            src={'https://icons.better-idea.org/icon?url='+source.url+'&amp;size=70..120..200'}></img></div>
            <div className='news-sources-text'><h2>{ source.name }</h2>
            <p>{ source.description }</p>
            <h3><p>Category: { source.category }</p></h3>
            <a href={ source.url } target='_blank'>{ source.url }</a>
            </div>
            </div>
        )}
    </div>
  );
};

DashboardItems.propTypes = {  
  sources: PropTypes.object.isRequired
};

export default DashboardItems;  
