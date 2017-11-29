import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import DashboardItems from './DashboardItems';
import '../../index.css'

class Sources extends Component {
  render() {
    const props = this.props;
     console.log('Dashboard Items',props);
   //console.log('Dashboard Props',this.props);
    return (
      <div className="body">
        <h1 className='news-sources-heading'>News Sources</h1>
        <DashboardItems props={props}/>
    </div>
    );
  }
  
}
Sources.propTypes = {
  sources: PropTypes.array.isRequired
};

function mapStateToProps(state, props) {

  return {
    sources: state.sources
  };

} 

export default connect(mapStateToProps)(Sources);  
