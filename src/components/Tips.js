import React from 'react';

export default class Tips extends React.Component {

  render() {

    const tips = this.props.tips.map((tip) => {
      return(<li className='alert alert-info' >{tip}</li>)
    })

    return(
      <aside className={`tips ${this.props.className}`}>
        <ul>
          {tips}
        </ul>
      </aside>
    )
  }
}