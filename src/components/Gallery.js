import React, { useEffect, useState } from 'react';
import firebase from '../firebase';

const Gallery = () => {
	// const [data, setData] = useState([]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const db = firebase.firestore();
	// 		const myData = await db.collection('graphics').get();
	// 		setData(myData.docs.map((doc) => doc.data()));
	// 		console.log(data[0]);
	// 	};
	// 	fetchData();
	// }, []);

	return (
		<div>
			<h1>Gallery with hover effect</h1>
			<div class="wrapper">
				<div class="media">
					<div class="layer">
						<p>+ Paul Gilmore</p>
					</div>
					<img
						src="https://images.unsplash.com/photo-1431818563807-927945852ab6?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop="
						alt=""
					/>
				</div>
				<div class="media">
					<div class="layer">
						<p>+ M. O' Neil</p>
					</div>
					<img
						src="https://images.unsplash.com/photo-1443397646383-16272048780e?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop="
						alt=""
					/>
				</div>
				<div class="media">
					<div class="layer">
						<p>+ N. Mehta</p>
					</div>
					<img
						src="https://images.unsplash.com/photo-1442965416224-f6a7eca980fa?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
