import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button className='square'
                onClick={() => {
                    this.setState({ value: 'X' })
                }}>
                {this.state.value}
                {console.log(this)} 
            </button>
        );
    }
}

//we use arrows to bind the function to the class?

export default Square;