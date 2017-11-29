import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import DashboardItems from './DashboardItems';
import '../../index.css'

class Sources extends Component {

  render() {
    const sources = this.props.sources;
    return (
      <div className="body">
        <h1>News Sources</h1>
        <DashboardItems sources={sources}/>
    </div>
    );
  }
}
Sources.propTypes = {
  sources: PropTypes.object.isRequired
};

function mapStateToProps(sources, props) {

  return {
    sources: sources
  };

} 

export default connect(mapStateToProps)(Sources);  
