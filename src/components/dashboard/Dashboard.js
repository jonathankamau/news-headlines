import React, { Component } from 'react';
import '../../index.css'

class Sources extends Component {
    state = {sources: []}

  componentDidMount() {
    fetch(`/sources`)
    .then(res => res.json())
    .then(items => this.setState({ sources: this.state.sources.concat(items.sources )}));
    console.log(this.state);
  }

  render() {
    return (
      <div className="body">
        <h1>News Sources</h1>
        {this.state.sources.map(source =>
          <div className='news-list' key={source.id}>{ source.name }</div>
        )}
    </div>
    );
  }
}

export default Sources;