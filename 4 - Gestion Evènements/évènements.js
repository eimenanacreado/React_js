
/*

    * Create a button & when we click on this last we write something on the consol.

*/

const Greeter = ({ whom }) => (
  <button onClick={() => console.log(`Bonjour ${whom} !`)}>
    Vas-y, clique !
  </button>
)

ReactDOM.render(<Greeter whom="Roberto" />, 
                document.getElementById('root')
)

/* ______________________________________________________ */

handleCardClick(card) {
  console.log(card, 'clicked')
}

<Card card="😀" feedback="hidden" onClick={this.handleCardClick} />
<Card card="🎉" feedback="justMatched" onClick={this.handleCardClick} />
<Card card="💖" feedback="justMismatched" onClick={this.handleCardClick} />
<Card card="🎩" feedback="visible" onClick={this.handleCardClick} />
<Card card="🐶" feedback="hidden" onClick={this.handleCardClick} />
<Card card="🐱" feedback="justMatched" onClick={this.handleCardClick} />

// Edit Card to accepte onClick

const Card = ({ card, feedback, onClick }) => (
  <div className={`card ${feedback}`} onClick={() => onClick(card)}>
  // …))