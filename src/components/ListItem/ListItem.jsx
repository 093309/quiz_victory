import Card from '../Card/Card';
import styled from './ListItem.module.css';
import cardInfo from './config';
import { Link, Route, Routes } from 'react-router-dom';
import CardList from '../CardList/CardList';
import dateCard from '../CardList/config';

const ListItem = () => {
  return (
    <section className={styled.list__item}>
      <div className="container">
        <div className={styled.link}>           {/*  здесь сделал переход по карточке */}
          <div className={styled.wrapper}>
              {dateCard.map((card) => (
                <Card key={card.id} name={card.title} desc={card.body} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListItem