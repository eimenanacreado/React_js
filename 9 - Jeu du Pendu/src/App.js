import React, { Component } from 'react';
import './App.css';
import Keys, {KeyInitalise, Alphabets} from './Keys'
import {Card, CardHeader, CardBody, CardFooter} from './Card'
import Word, {ListWords} from './Word'

/*

  Note importante : Ce code n'est pas forcément la meilleur méthode ni la meilleur façon du savoir faire,
  ici vous trouvez les points obligatoire à appliquer dans l'activité mais pas les extentions possible ( les suggestions )

*/

/*
  Une variable (ramdomNumber) qui sert a regéner chaque fois un nombre randome pour s'en servir à l'éxtraction d'un mot de la liste.
  Une constante (VISUAL_PAUSE_MSECS) pour un petit timeout
*/
var ramdomNumber = Math.floor(Math.random() * (ListWords.length)) + 0
const VISUAL_PAUSE_MSECS = 250

class App extends Component {

  /*
    nombreTentativeRestaut : nombre de tentatives restantes
    currentRandomWord : Le mot actuel qu'on vient d'éxtraire
    currentRandomWordHidden : Le mot actuel qu'on vient d'éxtraire (en mode masqué avec les _ )
    AlphabetClicked : Tableau pour stocké les aphabets qu'on vient de cliquer
    nombreAphabetFinded : nombre d'alphabet dans un mot trouvés
    won : gagné par défault = false
    lose : perdu par défault = false
    classKeys : une classe qui permet de faire un css sur les buttons ( display :  flex;) affichage
    classKeyInit : une classe qui permet de faire un css sur les buttons ( display :  none;) masqué
  */

  state = {
    nombreTentativeRestaut : 10,
    currentRandomWord : ListWords[ramdomNumber].split(""),
    currentRandomWordHidden : this.hideThisWord(ListWords[ramdomNumber].split("")),
    AlphabetClicked : [],
    nombreAphabetFinded : 0,
    won : false,
    lose : false,
    classKeys : 'd-flex',
    classKeyInit: 'd-none'
  }

  // Une fonction qui s'éxecute quand on clique sur un button d'aplhabet
  handleKeyClick = value => {

    const {currentRandomWordHidden, nombreTentativeRestaut, currentRandomWord, AlphabetClicked} = this.state
    const currentIndexOfAlphabet = currentRandomWord.indexOf(value)

    this.setState({AlphabetClicked : [...AlphabetClicked, ...value]});

    this.canPlayAgain() && 
    (
      currentIndexOfAlphabet === -1   
      ? this.setState({nombreTentativeRestaut: nombreTentativeRestaut-1}) 
      : this.showThisWord(value)
    )

    setTimeout(() => this.heLoseOrWin(), VISUAL_PAUSE_MSECS) 
  
  }

  // Une fonction qui s'éxecute quand on clique sur le button d'initalisation de la partie.
  InitaliseThisState = () => {
    ramdomNumber = Math.floor(Math.random() * (ListWords.length)) + 0;
    this.setState({
      nombreTentativeRestaut : 10,
      currentRandomWord : ListWords[ramdomNumber].split(""),
      currentRandomWordHidden : this.hideThisWord(ListWords[ramdomNumber].split("")),
      AlphabetClicked : [],
      nombreAphabetFinded : 0,
      won : false,
      classKeys : 'd-flex',
      classKeyInit: 'd-none'
    }, ()=>(console.log(this.state.AlphabetClicked)))
  }

  // Une fonction qui permet de déterminer si le joueur peut jouer encore
  canPlayAgain(){
    const {currentRandomWordHidden, nombreTentativeRestaut, won} = this.state
    if(won === false && this.isThereWordHiddenAgain(currentRandomWordHidden) === true && nombreTentativeRestaut > 0){
      return true;
    }else{
      return false;
    }
  }

  // Une fonction qui permet de déterminer si le joueur à gagner ou perdu après qu'il a jouer !
  heLoseOrWin(){
    const {currentRandomWordHidden, won, nombreTentativeRestaut} = this.state
    if(this.isThereWordHiddenAgain(currentRandomWordHidden) === false){
      this.setState(wow => ({won : !won.check}), ()=>(this.hideButton(this.state.won)) );
    }else{
      if(nombreTentativeRestaut === 0){
        this.setState(lose => ({lose : !lose.check}), ()=>(this.hideButton(this.state.lose)) );
      }
      
    }
  }

  // Une fonction qui permet de masqué le mot extrait au début (voir la state)
  hideThisWord (mot){

    const hiddenWordTmp = [];

    mot.map((value, index)=>(
      hiddenWordTmp.push('_')
    ))
    return hiddenWordTmp;
  }

  // Une fonction qui permet de savoir s'il existe des alphabets masqués encore dans le mot ou pas et cela va nous aidé à savoir si le joueur à gagné
  isThereWordHiddenAgain(words){
    var wordHiddenAgain = false;
    words.map( (value, index) => (value === '_' ? wordHiddenAgain = true : wordHiddenAgain = wordHiddenAgain  ) )
    return wordHiddenAgain;
  }

  // Une fonction qui permet de ne plus masqué un alphabet si le click est correcte 
  showThisWord(AlphabetCliqued){
    const {currentRandomWord, currentRandomWordHidden} = this.state
    const ArrayTmp = []
    currentRandomWord.map( (value, index) =>( value === AlphabetCliqued 
                                              ? 
                                                (
                                                  ArrayTmp.push(AlphabetCliqued)
                                                )

                                              : ArrayTmp.push(currentRandomWordHidden[index]) 
                                              
                                              ));

    this.setState({currentRandomWordHidden: ArrayTmp});
    
  }

  // Une fonction qui désactive un button lors d'un clique
  disableThisButton(value){

    const {AlphabetClicked} = this.state;
    if(AlphabetClicked.includes(value)){
      return true;
    }else{
      return false;
    }
  }
  
  //Une fonction qui masque les alphabets et rend visible le button d'initialisation en cas de perte ou de win
  hideButton(won){
    
    if(won){
      this.setState({classKeys: 'd-none', classKeyInit: 'd-flex'});
    }else{
      this.setState({classKeys: 'd-flex', classKeyInit: 'd-none'});
    }
  }

  render() {

    const {nombreTentativeRestaut, currentRandomWordHidden, classKeys, classKeyInit} = this.state;

    return (
      <div className="body">
        <Card>
          <CardHeader>Il vous reste : {nombreTentativeRestaut} tentatives.</CardHeader>
          <CardBody>
            {
                Alphabets.map((value, index)=>(

                    <Keys visibleClass={classKeys} disabled={this.disableThisButton(value)} value={value} index={index} key={index} onClick={this.handleKeyClick} />
                    
                ))
            
            }
            <KeyInitalise visibleClass={classKeyInit} onClick={this.InitaliseThisState} />
          </CardBody>
          <CardFooter>
            <Word currentWord={
              currentRandomWordHidden
            }></Word>
          </CardFooter>
        </Card>
        
      </div>
    );
  }

}

export default App;
