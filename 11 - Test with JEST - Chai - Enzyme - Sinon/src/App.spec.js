import {expect} from 'chai' // if we use Enzyme
import React from 'react';
//import ReactDOM from 'react-dom'; // we don't need this if we use Enzyme
import App from './App';
import {shallow} from 'enzyme' // if we use Enzyme

import GuessCount from './GuessCount' // in this exemple of Enzyme

describe('<app />', () => {

  it('renders without crashing', () => {
    // const div = document.createElement('div'); // we don't need this if we use Enzyme
    // ReactDOM.render(<App />, div); // we don't need this if we use Enzyme
    const wrapper = shallow(<App />); // if we use Enzyme
  
    // Enzyme exemple
    expect(wrapper).to.contain(<GuessCount guesses={0} />);
  
  })

  it('has 36 cards', () => {
    const wrapper = shallow(<App />); // if we use Enzyme
    // Enzyme exemple
    expect(wrapper.find('Card')).to.have.length(36);
  })  

});

/*
    (Documentation JEST : https://jestjs.io/)
    IMPORTANT :
    - Il faut créer un fichier nomdufichier.spec.js ou nomdufichier.test.js ou dans des dossiers _test__
    - Dans le terminal du dossier de votre projet lancé la commande (npm test)
*/
