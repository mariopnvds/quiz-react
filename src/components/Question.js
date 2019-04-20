import React from 'react'

export default class Question extends React.Component {
  render() {
    return(
      <div className={'question'}>
        <h1>Question {this.props.currentQuestion}</h1>
        <p>{this.props.question}</p>
      </div>
    );
  }
}