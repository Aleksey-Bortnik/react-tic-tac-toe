import React from 'react';
import Board from '../board/board.jsx';
import { calculateWinner } from '../utils/utils.jsx';
import './game.scss'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            isXNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.isXNext ? 'X' : 'O';
        this.setState({
            history: history.concat([
                {
                    squares: squares,
                }
            ]),
            stepNumber: history.length,
            isXNext: !this.state.isXNext,
        });
    };

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            IsXNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ? 'To the step #:' + move : 'To Start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'The Winner is: ' + winner;
        } else {
            status = 'Next is: ' + (this.state.isXNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>

                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;
