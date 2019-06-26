import React from 'react'
import './Keys.css'

const Keys = ({visibleClass, disabled, value, index, onClick}) => (
    <button className={`btn-key ${visibleClass}`} disabled={disabled} value={`${value}`} index={index} key={index} onClick={()=>onClick(value)}>{value}</button>
)

export default Keys

export const KeyInitalise = ({visibleClass, onClick}) => (
    <button className={`btn-reload ${visibleClass}`} onClick={()=>onClick()}>Nouvelle partie</button>
)

export const Alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];