import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component { //? create the same component?
    render() {
        return (
            <button className='square'>
                {/* {todo} */}
            </button>
        );
    }
}

class Board extends React.Component { //? create the same component?
    renderSquare(i) {
        return <Square />
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className='status'>{status}</div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component { //? create the same component?
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
