import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';


import NewsItems from './news-headlines-items';
import '../../index.css'

class NewsHeadlines extends Component {


  render() {
  //const headlineSource = this.props.location.state;
  
  console.log('Headline Props', this.props);

    const props = this.props;
    return (
      <div className="body">
        <h1 className='news-sources-heading'>Top News Headlines</h1>
        <NewsItems props={props}/>
    </div>
    );
  }
}
NewsHeadlines.propTypes = {
  headlines: PropTypes.array.isRequired
};

function mapStateToProps(state, props) {

  return {
    headlines: state.headlines
  };

} 

export default connect(mapStateToProps)(NewsHeadlines);  
