import React from 'react';

class Card extends React.Component {
  render () {
    return(
      <div className='clearfix'>
        <h3>{this.props.title}</h3>
        <p>{this.props.desc}</p>
        <a className="btn btn-default" href={`#/item/${this.props.url}`} role="button">查看</a>
      </div>
    )
  }
}

Card.defaultProps={
  index:1,
  title:'Today',
  desc:'开心'
}
Card.propTypes={
  index:React.PropTypes.number,
  title:React.PropTypes.string,
  desc:React.PropTypes.string
}
export default Card;
