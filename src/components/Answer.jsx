import React from 'react'

const Answer = (props) => {
  return (
    <div className="answerTotalPage">
      <div className="title">
        <h2>Правильных ответов <span> {props.score} / {props.questions.length}</span></h2>
      </div>
    </div>
  )
}

export default Answer;