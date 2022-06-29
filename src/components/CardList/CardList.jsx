import dateCard from "./config"
import styled from './CardList.module.css'
import { Link } from "react-router-dom"

const CardList = () => {
  // console.log(dateCard[0].info)
  // dateCard[0].info.map(el=>console.log(el.subTitle, el.description))
  return (
    <section className={styled.card__list}>
      <div className='container'>
        <div className='wrapper'>
          <div className={styled.content}>
            <div className={styled.box}>
              {dateCard[0].info.map(el => {
                return (
                  <>
                    <h1>{el.subTitle}</h1>
                    <p>{el.description}</p>
                  </>
                )
              })}
            </div>
            <div className="btns">
              <Link to='/test-list'>
                <button className={styled.btn}>Перейти к тесту</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardList