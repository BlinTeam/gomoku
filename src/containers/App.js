import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import ItemList from '../components/ItemList/ItemList';
import StatusBar from '../components/StatusBar/StatusBar';
import ToolsBar from '../components/ToolsBar/ToolsBar';
import Notification from '../components/Notification/Notification';

import { initGame, playGame } from '../actions';

import './App.css';

import Footprint from './ComputerResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }

  play(coord) {
    const { dispatch } = this.props;
    return dispatch(playGame(coord));
  }

  componentDidUpdate() {
    const { dispatch, gameState } = this.props;
    const mode = gameState.mode;
    const first = gameState.first;
    const activeUser = gameState.activeUser;
    const listArray = gameState.listArray;
    if (mode === 'pvp') {
      return;
    }
    const isAiRound = ((first === 'human' && activeUser === 'white') || (first === 'computer' && activeUser === 'black'));
    if (isAiRound && !gameState.gameOver) {
      let coord = Footprint(listArray, activeUser);
      return dispatch(playGame(coord));
    }
  }

  render() {
    const { dispatch, gameState } = this.props;
    const itemList = gameState.listArray.map((item, index) =>
      <div key={index}>
        <ItemList list={item} onClick={coord => this.play(coord)} listNumber={index}/>
      </div>
    );

    return (
      <div className='container'>
        <Header activeUser={gameState.activeUser}/>
        <div className='main'>
          <StatusBar
            mode={gameState.mode}
            first={gameState.first}
            activeUser={gameState.activeUser}
            />
          <div className='chessboard'>
            <Notification gameOver={gameState.gameOver} winner={gameState.winner} />
            {itemList}
          </div>
          <ToolsBar onRestart={(nextStatus) => dispatch(initGame(nextStatus))}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gameState: state.gameState
  };
}

export default connect(mapStateToProps)(App);
