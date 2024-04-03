import React from 'react';
import Navbar from './components/Navbar';
import BodyContent from './components/BodyContent';
import { ContextProvider } from './contexts/Todos';
import AllTodos from './components/AllTodos';
import CompletedTodos from './components/CompletedTodos';
import InputBox from './components/InputBox';
import BottomNav from './components/BottomNav';

function App() {
	return (
		<div className='main'>
			<img
				src='../src/assets/images/bg-desktop-dark.jpg'
				alt=''
				className='bg-img'
			/>
			<div className='wrapper'>
				<ContextProvider>
					<Navbar />
					<InputBox />
					<AllTodos />
					<CompletedTodos />
					<BottomNav />
				</ContextProvider>
			</div>
		</div>
	);
}

export default App;
