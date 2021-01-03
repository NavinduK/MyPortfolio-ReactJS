import React, { useEffect } from 'react';
import '../components/assets/css/lightgallery.css';
import {Link} from 'react-router-dom';

const Gallery = ({ data }) => {

	useEffect(() => {
		window.lightGal();
	}, []);

	return (
		<div style={{background: 'rgb(255, 255, 255)'}} >
		<div className="container">
			<div className="demo-gallery" style={{paddingBottom: '6vh'}}>
				<h2 className="text-center" style={{ paddingBottom: '3vh', paddingTop: '5vh', fontSize: '2rem' }}>
					Graphic Design
				</h2>

				<ul id="lightgallery" className="list-unstyled row">
					<li
						className="allcol col-6 col-sm-3 col-lg-3"
						data-src={data[14]?.img}
						data-sub-html={`<h4>${data[14]?.title}</h4><p>${data[14]?.desc}</p>`}
					>
						<a href="/#"  style={{ cursor: 'pointer' }}>
							<img className="img-responsive" src={data[14]?.thumb} alt={data[14]?.title} />
						</a>
					</li>
					<li
						className="allcol col-6 col-sm-3 col-lg-3"
						data-src={data[5]?.img}
						data-sub-html={`<h4>${data[5]?.title}</h4><p>${data[5]?.desc}</p>`}
					>
						<a href="/#" style={{ cursor: 'pointer' }}>
							<img className="img-responsive" src={data[5]?.thumb} alt={data[5]?.title} />
						</a>
					</li>
					<li
						className="allcol col-6 col-sm-3 col-lg-3"
						data-src={data[4]?.img}
						data-sub-html={`<h4>${data[4]?.title}</h4><p>${data[4]?.desc}</p>`}
					>
						<a href="/#" style={{ cursor: 'pointer' }}>
							<img className="img-responsive" src={data[4]?.thumb} alt={data[4]?.title} />
						</a>
					</li>
					<li
						className="allcol col-6 col-sm-3 col-lg-3"
						data-src={data[1]?.img}
						data-sub-html={`<h4>${data[1]?.title}</h4><p>${data[1]?.desc}</p>`}
					>
						<a href="/#" style={{ cursor: 'pointer' }}>
							<img className="img-responsive" src={data[1]?.thumb} alt={data[1]?.title} />
						</a>
					</li>
					
				</ul>
				<div className="text-center mt-3">
					<Link style={{color:'#b647d2', fontWeight:'600'}} to="/graphic-design">See More</Link>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Gallery;
