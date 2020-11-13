import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './components/assets/bootstrap/css/bootstrap.css';
import Navigation from './components/Navigation';
import Graphic from './components/Graphic';
import Home from './components/Home';
import Web from './components/Web';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
	const [graphicData, setGraphicData] = useState([]);
	const [webData, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const db = firebase.firestore();
			const myData = await db.collection('graphics').get();
			setData(myData.docs.map((doc) => doc.data()));
		};
		fetchData();
	}, []);
	return (
		<div className="App">
			<Router>
				<Navigation />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/graphic-design">
						<Graphic />
					</Route>
					<Route path="/web-design">
						<Web />
					</Route>
					<Route path="/navindu-kavishka">
						<Profile />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
