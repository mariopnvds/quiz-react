import React from 'react';
import Button from './Button';

export default class Alert extends React.Component {
  render() {
    return (
      <div className='row alert'>
        <div className='col-sm-12 col-md-9 alert alert-success score' style={!this.props.finished ? {visibility: 'hidden'} : {display: 'inherit'}}>
          Finished with score: {this.props.score}
          <a onClick={this.props.restart} className={'link'} style={{float: 'right'}}>RESET</a>
        </div>
        <div className='col-sm-12 col-md-3 alert alert-info timer'>
          Time left: {Math.floor(this.props.timeLeft / 60000)}:{(this.props.timeLeft / 1000 % 60) || '00'}
        </div>
      </div>
    )
  }
}