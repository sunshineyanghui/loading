import React from 'react';
import axios from 'axios';

class Blog extends React.Component{
  constructor(){
    super();
    this.state = {
      page: 1,
      data: []
    }
  }
  componentDidMount(){
    axios.get(`https://cnodejs.org/api/v1/topics?page=${this.state.page}&limit=5`)
      .then( res => this.setState({data:res.data.data}) )
  }
  handleCLick(nowPage){
    axios.get(`https://cnodejs.org/api/v1/topics?page=${nowPage+1}&limit=5`)
    .then( res => this.setState({
      data:[...this.state.data,...res.data.data],
      page: nowPage+1
    }) )

  }
  render(){
    console.log(this.state.data);
    return(
      <div className="jumbotron">
        {
          this.state.data.map( item =>
            <h5 key={Math.random()}>{item.title}</h5>
          )
        }
        <button type="button" className="btn btn-info" onClick={this.handleCLick.bind(this,this.state.page)}>More</button>
      </div>
    )
  }
}


export default Blog;
