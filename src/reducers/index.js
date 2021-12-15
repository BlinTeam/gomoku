import {combineReducers} from 'redux'

import {
  INIT_GAME,
  PLAY_GAME,
  END_GAME
} from '../actions'

import Result from '../components/Result'

let initialGameState = {
  listArray: initialListArray(),
  activeUser: 'black',
  mode: 'pve',
  first: 'human',
  winner: '',
  gameOver: false
}

function initialListArray() {
  let listArray = new Array(0)
  for (let i = 0; i < 19; i++) {
    let subList = new Array(0)
    for (let j = 0; j < 19; j++) {
      let go = {
        go: 'none'
      }
      subList.push(go)
    }
    listArray.push(subList)
  }

  return listArray
}

function play(state, coord) {
  let x = coord.x
  let y = coord.y
  state.listArray[x][y]['go'] = state.activeUser
  state.activeUser = state.activeUser === 'black' ? 'white' : 'black'

  return state
}

function getResult(state, coord) {
  let gameOver = Result({
    x: coord.x,
    y: coord.y
  }, state.activeUser, state.listArray)

  return {
    gameOver: gameOver,
    winner: state.activeUser
  }
}

function init(state, nextStatus) {
  state.mode = nextStatus.mode
  state.first = nextStatus.first
  state.activeUser = 'black'
  state.listArray = initialListArray()
  state.gameOver = false
  state.winner = ''
  return state
}

function gameState(state = initialGameState, action) {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case INIT_GAME:
      newState = init(newState, action.nextStatus)
      return newState
    case PLAY_GAME:
      let result = getResult(newState, action.coord)
      if (result.gameOver) {
        newState.gameOver = result.gameOver
        newState.winner = result.winner
      }
      newState = play(newState, action.coord)
      return newState
    case END_GAME:
      newState.gameOver = true
      return newState
    default:
      return state
  }
}

const gomokuApp = combineReducers({
  gameState
})

export default gomokuApp
