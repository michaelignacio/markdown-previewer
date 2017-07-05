import React, { Component } from 'react';
import marked from 'marked';
import initialText from './text.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = initialText;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    document.getElementById('output').innerHTML = marked(event.target.value);
    this.setState({value: event.target.value});
  }

  rawMarkup(value) {
    var rawMarkup = marked(value, {sanitize: true});
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div style={appStyle}>
        <h1 style={headingStyle}>Markdown Previewer</h1>
        <div style={columnStyle}>
          <textarea value={this.state.value} onChange={this.handleChange} style={textareaStyle} />
        </div>
        <div id='output' style={columnStyle} dangerouslySetInnerHTML={this.rawMarkup(this.state.value)}></div>
     </div>
    );
  }
}

const appStyle = {
  'display': 'flex'
}

const columnStyle = {
  'width': '50%',
  'margin': '20px'
}

const textareaStyle = {
  'margin-top': '20px',
  'width': '100%',
  'height': '550px',
  'padding': '10px'
}

const headingStyle = {
  'text-align': 'center'
}

export default App;
