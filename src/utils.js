import { TURN, WIN_COMBINATIONS } from './constants'
import confetti from 'canvas-confetti'

export const win = ({ setWinner, turn }) => {
  confetti()
  setWinner(turn)
}

export const checkWin = ({ newBoard, setWinner }) => {
  // if (newBoard[0] !== null && newBoard[0] === newBoard[3] && newBoard[3] === newBoard[6]) return win({ setWinner, turn })
  // if (newBoard[1] !== null && newBoard[1] === newBoard[4] && newBoard[4] === newBoard[7]) return win({ setWinner, turn })
  // if (newBoard[2] !== null && newBoard[2] === newBoard[5] && newBoard[5] === newBoard[8]) return win({ setWinner, turn })
  // if (newBoard[0] !== null && newBoard[0] === newBoard[1] && newBoard[1] === newBoard[2]) return win({ setWinner, turn })
  // if (newBoard[3] !== null && newBoard[3] === newBoard[4] && newBoard[4] === newBoard[5]) return win({ setWinner, turn })
  // if (newBoard[6] !== null && newBoard[6] === newBoard[7] && newBoard[7] === newBoard[8]) return win({ setWinner, turn })
  // if (newBoard[0] !== null && newBoard[0] === newBoard[4] && newBoard[4] === newBoard[8]) return win({ setWinner, turn })
  // if (newBoard[2] !== null && newBoard[2] === newBoard[4] && newBoard[4] === newBoard[6]) return win({ setWinner, turn })

  for (const combo of WIN_COMBINATIONS) {
    const [a, b, c] = combo
    if (
      newBoard[a] &&
      newBoard[a] === newBoard[b] &&
      newBoard[a] === newBoard[c]
    ) {
      return win({ setWinner, turn: newBoard[a] })
    } else if (newBoard.every((square) => square !== null)) {
      setWinner(true)
    }
  }
}

export const changeTurn = ({ turn, setTurn }) => {
  if (turn === TURN.X) {
    return setTurn(TURN.O)
  }
  return setTurn(TURN.X)
}
