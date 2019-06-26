import React from 'react'
import './Word.css'

const Word = ({currentWord}) => (
    <p className="current-word">{currentWord}</p>
)

export default Word

export const ListWords = [
    "BONJOUR",
    "SALUT",
    "EINSTEIN",
    "REACT",
    "OPENCLASSROOMS",
    "WORLD"
]