import React from 'react'

import Question from './Question'
import Answer from './Answer'

export default class Content extends React.Component {
  render() {
    return (
      <div className='content row'>
        <span className={'image col-sm-12 col-md-6'}>
          <img 
            src={this.props.question.attachment.url} 
            alt={`Question ${this.props.currentQuestion}`}
            />
        </span>
        <span className='col-sm-12 col-md-6'>
          <Question 
            className='row'
            question={this.props.question.question} 
            currentQuestion={this.props.currentQuestion}
            />
          <Answer 
            className='row'
            userAnswer={this.props.question.userAnswer}
            onQuestionAnswer={this.props.onQuestionAnswer}
            change={this.props.change}
            />
        </span>
      </div>
    );
  }
}