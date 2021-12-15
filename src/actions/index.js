export const INIT_GAME = 'INIT_GAME'
export const PLAY_GAME = 'PLAY_GAME'
export const END_GAME = 'END_GAME'

export function initGame(nextStatus) {
  return {
    type: INIT_GAME,
    nextStatus: nextStatus
  }
}

export function playGame(coord) {
  return {
    type: PLAY_GAME,
    coord: coord
  }
}

export function endGame() {
  return {
    type: END_GAME
  }
}
