import propTypes from 'prop-types' /* npm install --save prop-types */
import React from 'react'
import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({ card, feedback, onClick }) => (
  <div className={`card ${feedback}`} onClick={() => onClick(card)}>
    <span className="symbol">
      {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
    </span>
  </div>
)

Card.propTypes = {
  card: propTypes.string.isRequired,
  feedback: propTypes.oneOf([
    'visible',
    'hidden',
    'justMatched',
    'justMismatched',
  ]).isRequired,
  onClick: propTypes.func.isRequired,
}


export default Card