
/* _______ Need to be written inside index.js on src project ________ */

/* ____ CLASSIC ____*/

// Frist params : name of element (p there)
// Seconde params {} : list of attributs id, className...etc
// Last params : the content of the element

function CoolComponent() {
  return React.createElement('p', {}, 'Youpi So Cool !')
}

// ReactDOM.render : To show a Virtual DOM

ReactDOM.render(
  React.createElement(CoolComponent), document.getElementById('root')
)

/* ____ JSX ____*/

function CoolComponent({ adjective = 'Cool' }) {
  return <p>Youpi So {adjective} !</p>
}

ReactDOM.render(
  <div>
    <CoolComponent adjective="awesome" />
    <CoolComponent />
  </div>,
  document.getElementById('root')
)