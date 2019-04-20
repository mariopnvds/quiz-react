import React from 'react';

import Button from './Button'

export default class Actionbar extends React.Component {
  render() {
    return (
      <div className={`actionBar ${this.props.className}`}>
        <Button 
          onClick={() => {
            this.props.submit()
            this.props.clearInterval()  
          }} 
          text='SUBMIT'
          />
        <Button 
          onClick={() => {this.props.change('PREV')}} 
          text='PREV' 
          disabled={this.props.currentQuestion === 0 ? true : false}
          />
        <Button 
          onClick={() => {this.props.change('NEXT')}} 
          text='NEXT' 
          disabled={this.props.currentQuestion === 9 ? true : false}
          />
      </div>
    )
  }
}