import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './components/assets/bootstrap/css/bootstrap.css';
import Navigation from './components/Navigation';
import Graphic from './components/Graphic';
import Home from './components/Home';
import Web from './components/Web';
import Profile from './components/Profile';
import Footer from './components/Footer';
import firebase from './firebase';
import ScrollToTop from './ScrollToTop';


function App() {
	const [graphicData, setGraphicData] = useState([]);
	const [webData, setWebData] = useState([]);
	const [socialData, setSocialData] = useState([]);
	// const [contactData, setContactData] = useState([]);


	useEffect(() => {
		const fetchData = async () => {
			const db = firebase.firestore();
			const myDataG = await db.collection('graphics').get();
			const myDataW = await db.collection('web').get();
			const myDataS = await db.collection('social').get();
			// const myDataC = await db.collection('contact').get();

			setGraphicData(myDataG.docs.map((doc) => doc.data()));
			setWebData(myDataW.docs.map((doc) => doc.data()));
			setSocialData(myDataS.docs.map((doc) => doc.data()));
			// setWebData(myDataW.docs.map((doc) => doc.data()));

		};
		fetchData();
	}, []);
	return (
		<div className="App">
			<Router>
				<ScrollToTop>
					<Navigation />
					<Switch>
						<Route exact path="/">
							<Home skillData={socialData[2]} webData={webData} graphicData={graphicData} />
						</Route>
						<Route path="/graphic-design">
							<Graphic data={graphicData} />
						</Route>
						<Route path="/web-design">
							<Web data={webData} />
						</Route>
						<Route path="/navindu-kavishka">
							<Profile data={socialData} />
						</Route>
					</Switch>
					<Footer links={socialData[0]} contacts={socialData[1]}/>
				</ScrollToTop>
			</Router>
		</div>
	);
}

export default App;
