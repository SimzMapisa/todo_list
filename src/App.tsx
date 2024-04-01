import Navbar from './components/Navbar';
import BodyContent from './components/BodyContent';
import { ContextProvider } from './contexts/Todos';

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
					<BodyContent />
				</ContextProvider>
			</div>
		</div>
	);
}

export default App;
