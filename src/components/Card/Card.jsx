import styled from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className={styled.card}>
      <div className={styled.wrapper}>
        <Link to='/card-list' className={styled.link}>
          <div className={styled.card__name}>
            <h3>{props.name}</h3>
          </div>
          <div className={styled.card__description}>
            {/* <div> */}
            <p>{props.desc}</p>
            {/* </div> */}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Card