import React, { useEffect, useState } from 'react';
import '../components/assets/css/card.css';
import firebase from '../firebase';
import img1 from './assets/img/img0.jpg';

const Web = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		window.lightGal();
		const fetchData = async () => {
			const db = firebase.firestore();
			const myData = await db.collection('web').get();
			setData(myData.docs.map((doc) => doc.data()));
		};
		fetchData();
	}, []);

	return (
		<div>
			<div className="container content">
				<h2 className="text-center" style={{ marginBottom: '3vh', marginTop: '105px', fontSize: '2rem' }}>
					Web Design
				</h2>
				<div className="web">
					<div>
						<div className="web-card">
							<div className="web-card__img">
								<img src={img1} alt="Web Project" />
							</div>
							<div className="web-card__info">
								<div className="web-card__date">
									<span>frameworks</span>
								</div>
								<h1 className="web-card__title">title</h1>
								<p className="web-card__text">
									description description description description description description description description description description 
								</p>
								<div className="button-area">
									<a
										href="https://lkcovid19.netlify.app/
"
										className="web-card__cta"
										target="_blank"
									>
										Live Preview
									</a>
									<a href="#" className="web-card__cta">
										Github Repo
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Web;
