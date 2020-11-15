import React, { useEffect } from 'react';
import '../components/assets/css/lightgallery.css';

const Graphic = ({data}) => {

	useEffect(() => {
		window.lightGal();
	}, []);

	function galerytemp(i) {
		if(data[i]?.title==null){
			return <li style={{ display:'none'}}></li>;
		}
		return (
			<li
				className="allcol col-xs-12 col-sm-12 col-md-4 col-lg-3"
				data-src={data[i]?.img}
				data-sub-html={`<h4>${data[i]?.title}</h4><p>${data[i]?.desc}</p>`}
			>
				<a style={{ cursor: 'pointer' }}>
					<img className="img-responsive" src={data[i]?.img} alt={data[i]?.title} />
				</a>
			</li>
		);
	}

	return (
		<div className="container" style={{ minHeight: '100vh'}}>
			<div className="demo-gallery">
				<h2 className="text-center" style={{ marginBottom: '3vh', marginTop: '105px', fontSize: '2rem' }}>
					Graphic Design
				</h2>
				
				<ul id="lightgallery" className="list-unstyled row">
					{/* {gallery} */} 
					{/* My map() not working with the external JS libraries of this Boostrap gallery
						thats why doing this silly thing. I expect to add 50+ images in future */}
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
					{galerytemp(20)}
					{galerytemp(21)}
					{galerytemp(22)}
					{galerytemp(23)}
					{galerytemp(24)}
					{galerytemp(25)}
					{galerytemp(26)}
					{galerytemp(27)}
					{galerytemp(28)}
					{galerytemp(29)}
					{galerytemp(30)}
					{galerytemp(31)}
					{galerytemp(32)}
					{galerytemp(33)}
					{galerytemp(34)}
					{galerytemp(35)}
					{galerytemp(36)}
					{galerytemp(37)}
					{galerytemp(38)}
					{galerytemp(39)}
					{galerytemp(40)}
					{galerytemp(41)}
					{galerytemp(42)}
					{galerytemp(43)}
					{galerytemp(44)}
					{galerytemp(45)}
					{galerytemp(46)}
					{galerytemp(47)}
					{galerytemp(48)}
					{galerytemp(49)}
					{galerytemp(50)}
					{galerytemp(51)}
					{galerytemp(52)}
					{galerytemp(53)}
					{galerytemp(54)}
					{galerytemp(55)}
				</ul>
			</div>
		</div>
	);
};

export default Graphic;
