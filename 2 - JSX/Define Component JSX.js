
/* __________________ JSX vs Without JSX __________________ */

// Avec JSX
<p>Oh le joli paragraphe</p>

// Without JSX
React.createElement(p, {}, 'Oh le joli paragraphe')


/* ######################################################## */

// Avec JSX
<User first="John" last="Smith" />

// Without JSX
React.createElement(User, { first: 'John', last: 'Smith' })

/* ######################################################## */

/* __________________ Exemple JSX __________________ */

/*

    * handleSubmit, handleFieldChange : connexion in this exemple.
    
    * this.state.email,  this.state.password : Source of Data in this exemple.

*/

<form method="post" action="/sessions" onSubmit={this.handleSubmit}>
  <p className="field">
    <label>
      E-mail
      <input
        type="email"
        name="email"
        required
        autoFocus
        value={this.state.email}
        onChange={this.handleFieldChange}
      />
    </label>
  </p>
  <p className="field">
    <label>
      Mot de passe
      <input
        type="password"
        name="password"
        required
        value={this.state.password}
        onChange={this.handleFieldChange}
      />
    </label>
  </p>
  <p>
    <button type="submit" value="Connexion" />
  </p>
</form>

/* __________________ Exemple Without JSX __________________ */

React.createElement(
  'form',
  { method: 'post', action: '/sessions', onSubmit: this.handleSubmit },
  React.createElement(
    'p',
    { className: 'field' },
    React.createElement(
      'label',
      null,
      'E-mail',
      React.createElement('input', {
        type: 'email',
        name: 'email',
        required: true,
        autoFocus: true,
        value: this.state.email,
        onChange: this.handleFieldChange,
      })
    )
  ),
  React.createElement(
    'p',
    { className: 'field' },
    React.createElement(
      'label',
      null,
      'Mot de passe',
      React.createElement('input', {
        type: 'password',
        name: 'password',
        required: true,
        value: this.state.password,
        onChange: this.handleFieldChange,
      })
    )
  ),
  React.createElement(
    'p',
    null,
    React.createElement('button', { type: 'submit', value: 'Connexion' })
  )
)


/* ######################################################## */

/* __________________ IMPORTANT __________________ */

// Somes params who accepte true in classic HTML like : disabled, autoFOcus.. are writen as the same methode in JSX

// if false : autoFocus={false}

<input type="email" name="email" autoFocus required />
    
    

/* __________________ "" and {} __________________ */
    

/* 

    * Somes params can be written inside "" like maxlength="42" and like that maxlength=42, but the last one not work in JSX need to be written like : maxlength={42} or maxlength="42" 
    
    * Classic HTML : maxlength="42" OR maxlength=42
    * JSX : maxlength={42} OR maxlength="42"
    
    * IMPORTANT : and this for every params who get a number not a string !

*/    
    
<input
  type="email"
  name="email"
  maxlength={42}
  readonly={false}
  onChange={this.handleFieldChange}
  value={this.state.value}
/>
      
  
/* __________________ Who to comment in JSX __________________ */   
      
// We need to comment between {} Like that !

{/* Hellow Guys this is a comment ! */}