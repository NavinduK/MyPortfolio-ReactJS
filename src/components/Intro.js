import React from 'react';
import { Link } from 'react-router-dom';
import introimg from './assets/img/intro-img.png';
import AOS from 'aos';
AOS.init();

const Intro = () => {
	return (
		<div
			className="portfolio-block-top website gradient"
			style={{ minHeight: '105vh' ,maxHeight: '110vh' }}
		>
			<div className="container">
				<div className="row align-items-center block-height-top">
					<div
						data-aos="flip-right" data-aos-delay="50"
						className="col-md-12 col-lg-6 offset-lg-1 text"
						style={{ paddingTop: '3vh' }}
					>
						<h3 className="text-white mobile-intro1" style={{ fontSize: '2.5rem' }}>
							Hello World :)
						</h3>
						<h2 className="mobile-intro2">
							<strong>I'm Navindu Kavishka</strong>
							<br />
						</h2>
						<p className="text-white mobile-intro3" style={{ fontSize: '1.6rem', lineHeight: '1.7rem' }}>
							A designer who loves to find digital solutions for real problems
						</p>
						<p className="text-white mobile-intro4" style={{ fontSize: '1.3rem', lineHeight: '1.7rem' }}>
							I'm a Sri Lankan who skilled on Web Developing and Graphic Designing. Currently i'm a student undergraduate at University Of Peradeniya through BSc. (hons) Statistics and Operations Research.
						</p>
						<div className="text-right pt-1 seemoreprofile">
								<Link style={{ color: '#fff', fontWeight:'600' }} to="/navindu-kavishka">My Profile</Link>
						</div>
					</div>
					<div data-aos="flip-right" data-aos-delay="50" className="col-md-12 col-lg-5 text-center">
						<img  alt="Navindu Kavishka Intro" className="intro-img" src={introimg} height="465px" />
					</div>
					<div data-aos="zoom-in" data-aos-offset="-50" data-aos-delay="50" className="text-center m-auto pt-3 seemoreprofile2">
						<Link style={{ color: '#fff', fontWeight:'600' }} to="/navindu-kavishka">My Profile</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
