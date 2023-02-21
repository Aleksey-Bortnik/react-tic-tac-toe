import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Board from './Board.js';
import Square from './Square.js';





class Game extends React.Component { 
    render() {
        return (
            <div className='game'>
                <div className='game-board'>
                    <Board />
                    
                </div>
                <div className='game-info'>
                    <div>{/*status*/}</div>
                    <ol>{/*TODO*/}</ol>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root')); //? need to create root-component? 
root.render(<Game/>)
