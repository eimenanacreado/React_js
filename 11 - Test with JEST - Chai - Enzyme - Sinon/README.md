
  (Documentation JEST : https://jestjs.io/)
  
  IMPORTANT :

  - La brique élémentaire de nos tests est une assertion. Il s’agit tout simplement d’un morceau de code qui vérifie qu’une    condition est bien remplie, à défaut de quoi elle lève une  AssertionError  adaptée.

  - Un test est toujours constitué des mêmes étapes :
      - Si besoin, mise en place (setup)
      - Stimulus (appel de fonction, simulation d’événement, etc.)
      - Vérification des attentes (au moyen des assertions)
  
  - it() :  et la fourniture d’une fonction de rappel contenant le code de test, définit un test nommé à exécuter le moment venu.

  - expect()  met en place des assertions possibles sur l’argument qu’on lui passe, et le chaînage.

  -----------------------

  - Il faut créer un fichier nomdufichier.spec.js ou nomdufichier.test.js

  - Dans le terminal du dossier de votre projet lancé la commande (npm test)

  -----------------------


  (Documenttion CHAI : https://www.chaijs.com/)

  - npm install --save chai dirty-chai

  - npm install --save-dev chai-jest-diff

  - Pour configurer ce plugin une seule fois, sans avoir à le répéter à chaque début de fichier de test, on utilise un fichier de configuration Jest, prévu par Create React App, nommé  src/setupTests.js

  -----------------------

  (Documenttion CHAI : https://airbnb.io/enzyme/)

  - npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer chai-enzyme@beta