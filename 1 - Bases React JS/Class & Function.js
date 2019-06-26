
/* ######################################################################## */

/* __________ CLASSES __________ */

class Screen extends Component {
  constructor (props) {
    super(props)
    this.state = { loginState: 'logged-out' }
  }

  render () {
    // …
  }
}

/* ######################################################################## */

/* __________ FUNCTIONS __________ */

/* __________ OLD __________ */

const adults = [], minors = []
people.forEach(function (person) {
  if (person.age >= 18) {
    adults.push(person)
  } else {
    minors.push(person)
  }
})

people.map(function (person) {
  return person.firstName
})

/* __________ NEW __________ */

const adults = [], minors = []
people.forEach((person) => {
  if (person.age >= 18) {
    adults.push(person)
  } else {
    minors.push(person)
  }
})

people.map((person) => person.firstName)


/* __________ OLD __________ */

const name = 'Extérieur'

const obj = {
  name: 'Intérieur',
  runGreet () {
    // Ici, this.name est bien "Intérieur"
    setTimeout(function () {
      // Ici, this est soit l’objet global (mode laxiste de JS),
      // soit null (mode strict de JS)
    }, 0)
  }
}

obj.runGreet()

/* __________ NEW __________ */

const name = 'Extérieur'

const obj = {
  name: 'Intérieur',
  runGreet () {
    // Ici, this.name est bien "Intérieur"
    setTimeout(() => {
      // Ici, this n’est pas redéfini par la fonction,
      // car c’est une fonction fléchée : comme n’importe
      // quel identifiant, il est donc recherché dans les
      // portées englobantes, et trouvé au niveau de
      // runGreet, c’est donc aussi "Intérieur".
    }, 0)
  }
}

obj.runGreet()

/* ######################################################################## */

/* __________ Déstructuration __________ */

/* __________ OLD __________ */

const firstName = this.props.firstName
const lastName = this.props.lastName
const onClick = this.props.onClick


/* __________ NEW __________ */


const { firstName , lastName , onClick } = this.props


/* __________ OLD __________ */

const names = fullName.split(' ')

const firstName = names[0]
const lastName = names[1]

/* __________ NEW __________ */

const [firstName, lastName] = fullName.split(' ')


/* ######################################################################## */

/* __________ Modules Natifs, imports & exprots __________ */


// inside file textUtils.js


export function countWords (text) {
  return text.split(/\W+/u).filter(Boolean).length
}


export function normalizeSpacing (text) {
  return text.replace(/\s+/u, ' ').trim()
}


// inside the file main.js, in the same folder :

import { countWords } from './textUtils'

console.log(countWords('Hello world, this is nice!'))


/* __________ Modules Natifs, imports & exprots (DEFAULT) __________ */

// inside SuperComponent.js :

export default class SuperComponent {
  // …
}

// inside otherfile.js :

import GreatComponent from './SuperComponent'

// We can import with other Name like we want so there : GreatComponent = SuperComponent