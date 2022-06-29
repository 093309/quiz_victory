import React, { useState } from 'react'
import Answer from '../Answer';
import styled from './Test.module.css'

const Test = () => {
  //Состояние счетчика вопроса
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Состояние вопроса
  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);
  //функция по клику для перехода к следующему вопросу
  const handleAnswerClick = (isCorrect) => {

    //Проверка на правильный ответ
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;

    //Проверка(ЕСЛИ вопросы не закончились, перейди к следующему вопросу, ИНАЧЕ покажи результат)
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true)
    }
  }

  //Создаем переменную в виде массива с массивом вопросов и ответов
  const questions = [
    {
      id: 1,
      questionText: 'Что означает значение undefined?',
      answerOptions: [
        { answerText: 'Ошибочный результат вычислений', isCorrect: false },
        { answerText: 'Что значение не было присвоено', isCorrect: true },
        { answerText: 'Ссылкой на несуществующий объект ', isCorrect: false },
        { answerText: 'Символическое имя для значения', isCorrect: false }
      ],
    },
    {
      id: 2,
      questionText: 'К какому типу относится значение NaN?',
      answerOptions: [
        { answerText: 'К числовому', isCorrect: true },
        { answerText: 'К строковому', isCorrect: false },
        { answerText: 'К логическому', isCorrect: false },
        { answerText: 'К творческому', isCorrect: false }
      ],
    },
    {
      id: 3,
      questionText: 'Какой оператор вернет тип переменной, переданной ему в качестве аргумента?',
      answerOptions: [
        { answerText: 'native', isCorrect: false },
        { answerText: 'instanceof', isCorrect: false },
        { answerText: 'all', isCorrect: false },
        { answerText: 'typeof', isCorrect: true }
      ],
    },
    {
      id: 4,
      questionText: 'Сколько значений в JavaScript может принимать логический тип? ',
      answerOptions: [
        { answerText: 'Одно', isCorrect: false },
        { answerText: 'Два', isCorrect: true },
        { answerText: 'Три', isCorrect: false },
        { answerText: 'Восемьдесят тысяч девяносто восемь', isCorrect: false }
      ],
    },
    {
      id: 5,
      questionText: 'К какому типу относится значение null?',
      answerOptions: [
        { answerText: 'К символьному', isCorrect: false },
        { answerText: 'К числовому', isCorrect: false },
        { answerText: 'К строковому', isCorrect: false },
        { answerText: 'Ни к одному из перечисленных', isCorrect: true }
      ]
    }
  ]

  return (
    <section>
      <div className="container">
        <div className={styled.test}>
          <div className={styled.testList}>
            {showScore
              ? (<Answer questions={questions} score={score} />)
              :
              (<>
                <div className={styled.title}>
                  <h1>{questions[currentQuestion].questionText}</h1>
                  <h2>{questions[currentQuestion].id} / {questions.length} </h2>
                </div>
                <div className={styled.body}>
                  <div className={styled.box}>
                    {questions[currentQuestion].answerOptions.map((answerOptions) => (
                      <button className={styled.btn}
                        onClick={() => handleAnswerClick(answerOptions.isCorrect)}
                      >{answerOptions.answerText}</button>
                    ))}
                  </div>
                </div>
              </>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Test