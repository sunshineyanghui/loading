import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div className="jumbotron container-fluid">
        <div className='row'>
          <div className="col-xs-6 col-sm-4">
            <h4>黑夜的献诗</h4>
            <h5>黑夜从大地上升起</h5>
            <h5>遮住了光明的天空</h5>
            <h5>丰收后荒凉的大地</h5>
            <h5>黑夜从你内部升起</h5>
          </div>
          <div className="col-xs-6 col-sm-4">
            <h4>黑夜的献诗</h4>
            <h5>你从远方来, 我到远方去</h5>
            <h5>遥远的路程经过这里</h5>
            <h5>天空一无所有</h5>
            <h5>为何给我安慰</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
