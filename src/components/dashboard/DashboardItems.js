import React from 'react';
import { PropTypes } from 'prop-types';

const DashboardItems = ({sources}) => {
  console.log(sources.sources);
  return (
     <div>
        {sources.sources.map(source =>
          <div className='news-list' key={ source.id }>
            <li>{ source.name }</li>
            {source.description}
            </div>
        )}
    </div>
  );
};

DashboardItems.propTypes = {  
  sources: PropTypes.object.isRequired
};

export default DashboardItems;  
