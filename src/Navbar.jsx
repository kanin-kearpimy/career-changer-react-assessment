import React from 'react';

const Navbar = () => {
    return (
        <div id='navbar'>
            <ul style={{display:'flex', listStyle:'none', gap:'10px', justifyContent:'end'}}>
                <li><a href="/" style={{textDecoration:'none'}}>Home</a></li>
                <li><a href="/owner" style={{textDecoration:'none'}}>Owner</a></li>
            </ul>
            <hr />
        </div>
        
    )
}

export default Navbar