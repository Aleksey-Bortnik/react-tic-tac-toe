import React from 'react';

// class Square extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null,
//         };
//     }

//     render() {
//         return (
//             <button className='square'
//                 onClick={() => {
//                     this.props.onClick()
//                 }}>
//                 {this.props.value}
//                 {console.log(this)} 
//             </button>
//         );
//     }
// }

function Square(props) {
    return (
        <button className='square' onClick={props.onClick}>
            {props.value}
        </button>
    );
}

//we use arrows to bind the function to the class?

export default Square;
