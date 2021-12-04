import React, { useState, useEffect } from 'react'
import Card from './Card'

import s from './../css/board.module.css'

function Column({ data, updateColumn, columnIndex }) {
  const [cards, setCards] = useState([]);
  const [input, setInput] = useState('');
  const [firstView, setFirstView] = useState(false);

  useEffect(() => {
    if(cards.length === 0 && !firstView) {
      setFirstView(true);
      setCards(data.cards)
    }

    updateColumn(cards, columnIndex)

    // eslint-disable-next-line
  }, [cards]); 

  function updateCard(e) {
    e.preventDefault();

    if(!input.trim()) return;

    setCards(prev => [...prev, {
      id: 'card' + (Math.floor(Math.random() * 1234) * Math.floor(Math.random() * 4321)),
      text: input
    }])

    setInput('')
  }

  function deleteCard(index) {
    const copyCards = [...cards];
    copyCards.splice(index, 1);
    setCards(copyCards);
  }

  return (
    <div className={s.column + ' column' + columnIndex}>
      <div className={s.header}>
        <h4>{data.name}</h4>
      </div>

      <div className={s.cards}>
        { cards && cards.map((card, cardIndex) => <Card data={card} color={card.color ? card.color : "#FFC400"} index={cardIndex} deleteCard={deleteCard} key={card.id} />) }
      </div>

      {
        data.cards.length < 1 &&
        <div className={s.description}>
          {
            data.descriptions && data.descriptions.map(desc => (
              <div key={desc}>
                {desc}
              </div>
            ))
          }
        </div>
      }

      <div className={s.inputCreateCard}>
        <form onSubmit={updateCard}>
          <input type="text" placeholder="type here" required className="form-control" value={input} onChange={(e) => setInput(e.target.value)} />
          <button className="btn btn-light" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Column
