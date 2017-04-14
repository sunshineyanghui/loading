import React from 'react';
import axios from 'axios';

import hljs from 'highlight.js';

var marked = require('marked');
console.log(marked('I am using __markdown__.'));

class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      load:[]
    }
  }
  componentDidMount(){
    let address =this.props.params.title;
    axios.get(`https://raw.githubusercontent.com/snowling444/snow-3-23/master/data/${address}.md`)
     .then( res => this.setState({data:res.data}) )
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    return(
      <div className='jumbotron'>
        {this.state.data.length==0 ? <h4>请稍等</h4> :
         <div dangerouslySetInnerHTML={{__html:marked(this.state.data)}} />}
      </div>
    )
  }
}

export default Item;
