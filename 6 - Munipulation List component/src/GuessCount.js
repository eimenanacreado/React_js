import React from 'react'
import './GuessCount.css'

const GuessCount = ({ guesses }) => <div className="guesses">{guesses}</div>

GuessCount.defaultProps = {guesses: 0} // Definir une valeur par default pour guesses ! si celle si n'est pas difinit.

export default GuessCount