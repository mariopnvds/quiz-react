import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Game from './components/Game';
import Navbar from './components/Navbar';

import { questionAnswer, changeQuestion, submit, decreaseTimeLeft, conmuteTimer, restart, fetchQuestions } from './redux/actions';
import Alert from './components/Alert';

import logo from './assets/logo.svg';
import Footer from './components/Footer';

class App extends Component {

  render() {
    if (this.props.questions.questions.length > 0 && !this.props.questions.isFetching) {
      return (
        <div id='app'>
          <Navbar />
          <div className='container'>
          <Alert
            finished={this.props.finished}
            score={this.props.score}
            timeLeft={this.props.timeLeft}
            restart={() => { this.props.dispatch(restart(this.props.token)) }}
          />
          <Game
            question={this.props.questions.questions[this.props.currentQuestion]}
            currentQuestion={this.props.currentQuestion}
            onQuestionAnswer={(answer) => {
              this.props.dispatch(questionAnswer(this.props.currentQuestion, answer, this.props.finished));
              if (!this.props.timerId) {
                const timerId = setInterval(() => {
                  this.props.dispatch(decreaseTimeLeft(this.props.timerId, this.props.timeLeft, this.props.questions.questions));
                }, 1000);
                this.props.dispatch(conmuteTimer(timerId));
              }
            }}
            onChangeQuestion={(indication) => {
              this.props.dispatch(changeQuestion(this.props.currentQuestion, indication));
              if (!this.props.timerId) {
                const timerId = setInterval(() => {
                  this.props.dispatch(decreaseTimeLeft(this.props.timerId, this.props.timeLeft, this.props.questions.questions));
                }, 1000);
                this.props.dispatch(conmuteTimer(timerId));
              }
            }}
            onSubmit={() => {
              this.props.dispatch(submit(this.props.questions.questions));
            }}
            clearInterval={() => {
              clearInterval(this.props.timerId);
              this.props.dispatch(conmuteTimer(this.props.timerId));
            }}
          />
          </div>
          <Footer />
        </div>
      );
    } else if (!this.props.questions.isFetching && this.props.questions.questions.length === 0) {
      this.props.dispatch(fetchQuestions(this.props.questions.token));
    }
    return (
      <div className="loader">
        <img src={logo} className='spinner' />
        <span>
          Loading...
          </span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App);
