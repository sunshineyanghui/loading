import React from 'react';
import {Link} from 'react-router';

class MenuBar extends React.Component{
  render(){
    return(
      <div>
        <ul className="nav nav-tabs">
          <li role="presentation">
            <Link to="/" activeStyle={{color: '#A42D00'}} onlyActiveOnIndex={true}>Home</Link>
          </li>
          <li role="presentation">
            <Link to="/blog" activeStyle={{color: '#A42D00'}}>Blog</Link>
          </li>
          <li role="presentation">
            <Link to="/mine" activeStyle={{color: '#A42D00'}}>Mine</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default MenuBar;
