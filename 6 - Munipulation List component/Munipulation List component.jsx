
/* ______________________ Loop (for) - 1960 from C langage ______________________ */

// Like that
for (let index = 0, len = items.length; index < len; ++index) {
  // do something..
}

// Or..
for (const item of items) {
  // do something..
}

/* ______________________ map : Function Javascript ______________________ */

// map function apply to an array and get a params function to transform every element of this array (She create a copie, will not edit the original array).

const numbers = [1, 2, 3, 4]
const doubles = numbers.map(x => x * 2) // [2, 4, 6, 8]



/* ______________________ map : Exemple to reproduce a liste ______________________ */


const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Claire' },
  { id: 4, name: 'David' },
]

// Méthode 1 :

render () {
  return (
    <div className="userList">
      {this.props.users.map((user) => (
        <a href={`/users/${user.id}`}>{user.name}</a>
      ))}
    </div>
  )
}

// Méthode 2 : deconstructing

render () {
  return (
    <div className="userList">
      {this.props.users.map(({ id, name }) => (
        <a href={`/users/${id}`}>{name}</a>
      ))}
    </div>
  )
}

/*
    * IMPORTANT : if an element is add to the list on the top or anywhere, the list will be changed and, React need to be refrech, so ! more problèmes
                  to take original data, need to implément Key and this last need to be Unique and static in the time
*/

render () {
  return (
    <div className="userList">
      {this.props.users.map(({ id, name }) => (
        <a href={`/users/${id}`} key={id}>{name}</a>
      ))}
    </div>
  )
}