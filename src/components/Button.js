import React from 'react'

export default class Button extends React.Component {
  render() {
    return (
      <input type='button' 
        className={`button ${this.props.className}`} 
        onClick={() => {
          this.props.onClick()
          }
        }
        disabled={this.props.disabled}
        value={this.props.text}
      />
    );
  }
}