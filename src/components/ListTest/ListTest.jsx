import React from 'react'
import { Link } from "react-router-dom"
import styled from './ListTest.module.css'

const ListTest = () => {
  return (
    <section>
      <div className="container">
        <div className={styled.left}>
          <div className={styled.linkTest}>
            <Link to='/test' className={styled.test}>
              <h2>Тест1</h2>
            </Link>
            <Link to='#' className={styled.test}>
              <h2>Тест2</h2>
            </Link>
            <Link to='#' className={styled.test}>
              <h2>Тест3</h2>
            </Link>
            <Link to='#' className={styled.test}>
              <h2>Тест4</h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListTest