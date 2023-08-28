import { useState } from 'react'
import { Winner } from './components/Winner'
import { Reset } from './components/Reset'
import { changeTurn, checkWin } from './utils'
import { TURN } from './constants'
import './App.css'

export default function App () {
  const [squares, setSquares] = useState(new Array(9).fill(null))
  const [turn, setTurn] = useState(TURN.X)
  const [winner, setWinner] = useState(false)

  const handleReset = () => {
    setSquares(new Array(9).fill(null))
    setTurn(TURN.X)
    setWinner(false)
  }

  const handleSelect = (e) => {
    const squareId = e.target.id
    const newBoard = [...squares]
    if (winner) return
    if (newBoard[squareId] !== null) return
    newBoard[squareId] = turn
    changeTurn({ turn, setTurn })
    checkWin({ newBoard, setWinner })
    setSquares(newBoard)
  }

  return (
    <>
      <h1 className='title'>Tic Tac Toe</h1>
      {winner && <Winner id={winner} />}
      <div className='board'>
        {squares.map((square, index) => {
          return (
            <div id={index} className='square' key={index} onClick={handleSelect}>
              {square ?? ''}
            </div>
          )
        })}
      </div>
      {winner && <Reset handleReset={handleReset} />}
    </>
  )
}
