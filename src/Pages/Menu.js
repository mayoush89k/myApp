import {Link} from 'react-router-dom'
import React from 'react';

export default function Menu(params) {
    return(
        <div >
            <Link to='/Name-to-Flag-game'><button>Name to Flag Game</button></Link>
            <Link to='/Flag-to-Name-game' ><button>Flag to Name Game</button></Link>
            <Link to='/' ><button>HomePage</button></Link>
        </div>
    );
}