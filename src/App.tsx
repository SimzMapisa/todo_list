import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BodyContent from './components/BodyContent';
import { ContextProvider } from './contexts/Todos';
import AllTodos from './components/AllTodos';
import CompletedTodos from './components/CompletedTodos';
import InputBox from './components/InputBox';
import BottomNav from './components/BottomNav';
import ActiveTodos from './components/ActiveTodos';
import bgDark from '../src/assets/images/bg-desktop-dark.jpg';

function App() {
	return (
		<div className='main'>
			<img src={bgDark} alt='' className='bg-img' />
			<div className='wrapper'>
				<ContextProvider>
					<Router>
						<Navbar />
						<InputBox />
						<Routes>
							<Route path='/' element={<AllTodos />} />
							<Route path='/active' element={<ActiveTodos />} />
							<Route path='/completed' element={<CompletedTodos />} />
						</Routes>
						<BottomNav />
					</Router>
				</ContextProvider>
			</div>
		</div>
	);
}

export default App;
