import {Link} from 'react-router-dom'
import React from 'react';

export default function Menu(params) {
    return(
        <div >
            <Link to='/NTFgame'><button>Name to Flag Game</button></Link>
            <Link to='/FTNgame' ><button>Flag to Name Game</button></Link>
            <Link to='/' ><button>HomePage</button></Link>
        </div>
    );
}