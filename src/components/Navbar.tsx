import React from 'react';

const Navbar = () => {
	return (
		<div className='nav-wrapper'>
			<div>
				<h1>Todo</h1>
			</div>
			<div>
				<span className='icon-wrapper'>
					<img src={process.env.PUBLIC_URL! + '/images/bg-desktop-dark.jpg'} />
				</span>
			</div>
		</div>
	);
};

export default Navbar;
