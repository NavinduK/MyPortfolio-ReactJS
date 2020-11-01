import React, { useEffect, useState } from 'react';
import firebase from '../firebase';
import '../components/assets/css/lightgallery.css';

const Graphic = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		window.lightGal();
		const fetchData = async () => {
			const db = firebase.firestore();
			const myData = await db.collection('graphics').get();
			setData(myData.docs.map((doc) => doc.data()));
		};
		fetchData();
	}, []);

	// const gallery = data.map((item,index) => (
	// 	<li
	// 		key={item.index}
	// 		className="col-xs-6 col-sm-4 col-md-4 col-lg-3"
	// 		data-src={item.img}
	// 		data-sub-html={`<h4>${item.title}</h4><p>${item.desc}</p>`}
	// 	>
	// 		<a style={{ cursor: 'pointer' }}>
	// 			<img className="img-responsive" src={item.img} alt="Thumb-1" />
	// 		</a>
	// 	</li>
	// ));

	function galerytemp(i) {
		return (
			<li
				className="allcol col-xs-12 col-sm-12 col-md-4 col-lg-3"
				data-src={data[i]?.img}
				data-sub-html={`<h4>${data[i]?.title}</h4><p>${data[i]?.desc}</p>`}
			>
				<a href="" style={{ cursor: 'pointer' }}>
					<img className="img-responsive" src={data[i]?.img} alt="Thumb-1" />
				</a>
			</li>
		);
	}

	return (
		<div className="container">
			<div className="demo-gallery">
				<h2 className="text-center" style={{ marginBottom: '3vh',marginTop: '105px', fontSize: '2rem' }}>
					Graphic Design
				</h2>
				<ul id="lightgallery" className="list-unstyled row">
					{/* {gallery} */}
					{/* //My map() not working thats why doing this silly thing */}
					{galerytemp(0)}
					{galerytemp(1)}
					{galerytemp(2)}
					{galerytemp(3)}
					{galerytemp(4)}
					{galerytemp(5)}
					{galerytemp(6)}
					{galerytemp(7)}
					{galerytemp(8)}
					{galerytemp(9)}
					{galerytemp(10)}
					{galerytemp(11)}
					{galerytemp(12)}
					{galerytemp(13)}
					{galerytemp(14)}
					{galerytemp(15)}
					{galerytemp(16)}
					{galerytemp(17)}
					{galerytemp(18)}
					{galerytemp(19)}
				</ul>
			</div>
		</div>
	);
};

export default Graphic;
