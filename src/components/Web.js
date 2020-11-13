import React, { useEffect, useState } from 'react';
import '../components/assets/css/card.css';
import firebase from '../firebase';

const Web = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const db = firebase.firestore();
			const myData = await db.collection('web').get();
			setData(myData.docs.map((doc) => doc.data()));
		};
		fetchData();
	}, []);

	return (
		<div style={{ minHeight: '100vh'}}>
			<div className="container content">
				<h2 className="text-center" style={{ marginBottom: '4vh', marginTop: '105px', fontSize: '2rem' }}>
					Web Design
				</h2>
				<div className="web">
					<div>
						{
							data.map((item,index) => (

							<div className="web-card">
								<div className="web-card__img">
									<img src={item.img} alt="Web Project" />
								</div>
								<div className="web-card__info">
									<div className="web-card__date">
										<span>{item.dev}</span>
									</div>
									<h1 className="web-card__title">{item.title}</h1>
									<p className="web-card__text">
										{item.desc} 
									</p>
									<div className="button-area">
										<a
											href={item.link}
											className="web-card__cta"
											target="_blank"
										>
											Live Preview
										</a>
										<a 
											href={item.repo} 
											className="web-card__cta"
											target="_blank"
										>
											Github Repo
										</a>
									</div>
								</div>
							</div>
							))
						}
						<div className="bottom-margin"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Web;
