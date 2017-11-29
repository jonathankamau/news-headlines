import React from 'react';
import { PropTypes } from 'prop-types';

import { loadHeadlines } from '../../actions/headlineActions';

const DashboardItems = ({props}) => {
  const sources = props.sources;
  return (
     <div className='news-sources-list-wrapper'>
        {sources.map(source =>
          <div className='news-sources-list' key={ source.id }>
            <div><img className='news-source-logo' alt='logo' 
            src={'//logo.clearbit.com/'+source.url.split('/')[2]}></img></div>
            <div className='news-sources-text'><h2>{ source.name }</h2>
            <p>{ source.description }</p>
            <h3><p>Category: { source.category }</p></h3>
            <a href={ source.url } target='_blank'>{ source.url }</a>
            <div><button onClick={() => redirectButton(props, source.id)}>View News Headlines</button></div>
            </div>
            </div>
        )}
    </div>
  );
};

function redirectButton(props, sourceName) {
 
  //console.log(sourceName);
  props.dispatch(loadHeadlines(sourceName));
  props.history.push({pathname: '/news-headlines', state: sourceName});
}

DashboardItems.propTypes = {  
  props: PropTypes.object.isRequired
};

export default (DashboardItems);  
