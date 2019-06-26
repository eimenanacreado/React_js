import React, { Component } from 'react'
import shuffle from 'lodash.shuffle' /* npm install --save lodash.shuffle */

import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, { FAKE_HOF } from './HallOfFame'

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

const VISUAL_PAUSE_MSECS = 750 // Variable pour définire un temps pour le timer 750 Millisecondes par exemple.

class App extends Component {
  

  // Initialisation de l'état local
  // Dans cet exemple c'est comme le jeu de carte avec les tortlons sur World of Warcraft..
  state = {
    cards: this.generateCards(),
    currentPair: [], // Pair en cours
    guesses: 0, // Nombre de tentative de pair en cour
    matchedCardIndices: [], // un tableau pour concervé les positions des cartes appairé avec success !
  }

  /*
      Function : generateCards()
      Description : c'est une fonction qui retourne un tableau de cartes mélongé (36 cartes) car ici dans SYMBOLS on a 18 donc chaque carte doit être doublé
      18 x 2 = 36 ou autrement SIDE * SIDE = 36 (6x6)
  */
  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }

// Choix de Garentille de this
// Arrow fx for binding
handleCardClick = index => {
    const { currentPair } = this.state

    if (currentPair.length === 2) {
      return
    }

    if (currentPair.length === 0) {
      this.setState({ currentPair: [index] })
      return
    }

    this.handleNewPairClosedBy(index)
}

/*------------ */

handleNewPairClosedBy(index) {
  const { cards, currentPair, guesses, matchedCardIndices } = this.state // On récupère les stats

  const newPair = [currentPair[0], index] // Une variable qui contient les deux paires actuels
  const newGuesses = guesses + 1 // On incrémente le nombre de tentative ++
  const matched = cards[newPair[0]] === cards[newPair[1]] // Si la carte dévoilé est la même que celle déja dévoilé avant
  this.setState({ currentPair: newPair, guesses: newGuesses }) // Mise à jour de notre state
  if (matched) {
    this.setState({ matchedCardIndices: [...matchedCardIndices, ...newPair] }) // Concaténation des tableaux ( sprad )
  }
  setTimeout(() => this.setState({ currentPair: [] }), VISUAL_PAUSE_MSECS) 
  // Laissé le temps a réact pour soit remasqué si ce n'est pas ma même carte ou la laissé cas échéant
}

  /* getFeedbackForCard : Une simple fonction qui prend la position d'une carte et elle va partir de la examiné la pair en cours et les cartes déja appairé pour décidé quelle est la 
     valeur de feedback à utilisé pour cette carte la */

  getFeedbackForCard(index) {
    const { currentPair, matchedCardIndices } = this.state // On récupère les stats
    const indexMatched = matchedCardIndices.includes(index) // vérifie si l'index existe actuellement dans matchedCardIndices elle retourne true ou false
  
    if (currentPair.length < 2) {
      return indexMatched || index === currentPair[0] ? 'visible' : 'hidden'
    }
  
    if (currentPair.includes(index)) {
      return indexMatched ? 'justMatched' : 'justMismatched'
    }
  
    return indexMatched ? 'visible' : 'hidden'
  }

  render() {

    // S'en servir de l'état déclarer en haut..
    const {cards, guesses, matchedCardIndices } = this.state

    const won = matchedCardIndices.length === cards.length // On gagne quand le nombre des cartes appérai sont autant des cartes dans le jeu

    return (
      <div className="memory">

        <GuessCount guesses={guesses} /> {/* On utilise guesses de l'état */}

        {/* On utilise cards de l'état au lieu this.cards */}
        {cards.map((card, index)=>(

          /* On a ajouter index={index} a la card parce que on handleCardClick prend index comme position */
          <Card card={card} feedback={this.getFeedbackForCard(index)} key={index} index={index} onClick={this.handleCardClick} />
          
        ))}
            
        {won && <HallOfFame entries={FAKE_HOF} />}
            
      </div>
    )
  }
}

export default App