import React, {Component} from 'react'

import Content from './Content'
import Actionbar from './Actionbar'
import Tips from './Tips';

export default class Game extends Component {
  render() {
    return (
      <div className='game row'>
        <article className='col-sm-12 col-lg-9'>
          <Content 
            question={this.props.question} 
            currentQuestion={this.props.currentQuestion}
            onQuestionAnswer={this.props.onQuestionAnswer}
            change={this.props.onChangeQuestion}
            />
        </article>
        <Tips
          className='col-sm-12 col-lg-3'
          tips={this.props.question.tips}  
        />
        <Actionbar 
            className='col-sm-12 col-lg-9'
            submit={this.props.onSubmit} 
            clearInterval={this.props.clearInterval}
            change={this.props.onChangeQuestion}
            currentQuestion={this.props.currentQuestion}
            />
      </div>
    )
  }
}