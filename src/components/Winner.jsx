export const Winner = ({ id }) => {
  return (
    <div className={typeof id === 'string' ? 'winner' : 'draw'}>
      {typeof id === 'string' ? `And the winner is ${id} !!` : 'Draw'}
    </div>
  )
}
