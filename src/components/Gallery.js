import React from 'react';
// import '../components/assets/css/lightgallery.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { SRLWrapper } from 'simple-react-lightbox';
AOS.init();

const Gallery = ({ data, sdata }) => {

	return (
		<div style={{ background: 'rgb(255, 255, 255)' }} >
			<div className="container">
				<div className="demo-gallery" style={{ paddingBottom: '6vh' }}>
					<h2 data-aos="zoom-in-down" data-aos-offset="200" className="text-center" style={{ paddingBottom: '3vh', paddingTop: '5vh', fontSize: '2rem' }}>
						Graphic Design
					</h2>
					<div data-aos="zoom-in-down" data-aos-offset="200" className="text-center mb-3">
						<p style={{ margin: '0 5vw' }}>
							{sdata}
						</p>
					</div>
					<SRLWrapper>
						<div className="row m-0 justify-content-center">
							<div data-aos="flip-up" data-aos-duration="1500" data-aos-easing="ease-in-sine" className="text-center mb-3 p-0 col-6 col-sm-4 col-lg-3">
								<a className="m-auto" href={data[14]?.img}>
									<img style={{ width: '95%' }} src={data[14]?.thumb} alt={data[14]?.desc} />
								</a>
							</div>
							<div data-aos="flip-up" data-aos-duration="1700" data-aos-delay="200" data-aos-easing="ease-in-sine" className="text-center mb-3 p-0 col-6 col-sm-4 col-lg-3">
								<a className="m-auto" href={data[5]?.img}>
									<img style={{ width: '95%' }} src={data[5]?.thumb} alt={data[5]?.desc} />
								</a>
							</div>
							<div data-aos="flip-up" data-aos-duration="1900" data-aos-delay="200" data-aos-easing="ease-in-sine" className="text-center mb-3 p-0 col-6 col-sm-4 col-lg-3">
								<a className="m-auto" href={data[4]?.img}>
									<img style={{ width: '95%' }} src={data[4]?.thumb} alt={data[4]?.desc} />
								</a>
							</div>
							<div data-aos="flip-up" data-aos-duration="2000" data-aos-delay="300" data-aos-easing="ease-in-sine" className="text-center mb-3 p-0 col-6 col-sm-4 col-lg-3">
								<a className="m-auto" href={data[1]?.img}>
									<img style={{ width: '95%' }} src={data[1]?.thumb} alt={data[1]?.desc} />
								</a>
							</div>
						</div>
					</SRLWrapper>
					<div data-aos="zoom-in" data-aos-offset="40" className="text-center mt-4 seemoregallery">
						<Link style={{ color: '#b647d2', fontWeight: '600' }} to="/graphic-design">See More</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
