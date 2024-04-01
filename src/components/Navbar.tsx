import sunIcon from '../assets/images/icon-sun.svg';
import React from 'react';

const Navbar = () => {
	return (
		<div className='nav-wrapper'>
			<div>
				<h1>Todo</h1>
			</div>
			<div>
				<span className='icon-wrapper'>
					<img src={sunIcon} />
				</span>
			</div>
		</div>
	);
};

export default Navbar;
