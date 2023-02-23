import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './board/board.jsx';
import './index.scss';

class Game extends React.Component { 
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                    
                </div>
                <div className="game-info">
                    <div>{/*status*/}</div>
                    <ol>{/*TODO*/}</ol>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root')); //? need to create root-component? 
root.render(<Game/>)
