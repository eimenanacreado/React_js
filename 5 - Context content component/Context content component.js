 
/* ___________________ Si / Alors _____________________ */

<p>{user.admin && (
  <a href="/admin">Faire des trucs de VIP</a>
)}</p>

/* ___________________ Si / Alors / Sinon _____________________ */

<p>{user.loggedIn ? <WelcomeLabel /> : <LoginLink />}</p>

<p>{user.admin ? (
  <a href="/admin">Faire des trucs de VIP</a>
) : (
  <a href="/request-admin">Demander à devenir VIP</a>
)}</p>

/* ___________________ Découpage JSX _____________________ */

// ##### CAS 1 : Ré-utilisation au sein du render : #####

// Before ( Imaginons qu’un même bouton soit présent plusieurs fois dans l’interface )

render() {
  return (
    <Card>
      <CardTitle>
        Oh le joli titre
        <button onClick={this.logOut}>
          <LogoutIcon />
          Déconnexion
        </button>
      </CardTitle>
      …
      <Footer>
        © 2017 Des Gens Bien™ •
        <button onClick={this.logOut}>
          <LogoutIcon />
          Déconnexion
        </button>
      </Footer>
    </Card>
  )
}

// After

render() {
  const logoutButton = (
    <button onClick={this.logOut}>
      <LogoutIcon />
      Déconnexion
    </button>
  )

  return (
    <Card>
      <CardTitle>
        Oh le joli titre
        {logoutButton}
      </CardTitle>
      …
      <Footer>
        © 2017 Des Gens Bien™ •
        {logoutButton}
      </Footer>
    </Card>
  )
}

// ##### CAS 2 : grappe à l'intérieur d'une prop : #####

// Before : ( La valeur d'une prop peut être n’importe quelle expression JavaScript… Y compris une autre expression JSX. )

// les choses se compliquent quand la prop contient une grappe, ça devient illisible..

<ListItem
  primaryText="Vous êtes connecté·e en tant que"
  rightSideIcon={
    <IconButton onClick={this.logOut}>
      <LogoutIcon />
    </IconButton>
  }
  secondaryText={currentUser.email}
/>

// After : 

const logoutButton = (
  <IconButton onClick={this.logOut}>
    <LogoutIcon />
  </IconButton>
)
…
return (
  …
  <ListItem
    primaryText="Vous êtes connecté·e en tant que"
    rightSideIcon={logoutButton}
    secondaryText={currentUser.email}
  />
  …
)
