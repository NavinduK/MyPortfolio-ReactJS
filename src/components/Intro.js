import React from 'react';
import introimg from './assets/img/intro-img.png';

const Intro = () => {
	return (
		<div
			className="portfolio-block-top website gradient portfolio-block"
			style={{ marginTop: '-5px'}}
		>
			<div className="container">
				<div className="swing animated row align-items-center block-height-top">
					<div
						className="col-md-12 col-lg-5 offset-lg-1 text"
						style={{ paddingTop: '3vh' }}
					>
						<h3 className="text-white mobile-intro1" style={{ fontSize: '3rem' }}>
							Hello
						</h3>
						<h2 className="mobile-intro2">
							<strong>I'm Navindu Kavishka</strong>
							<br />
						</h2>
						<p className="text-white mobile-intro3" style={{ fontSize: '1.6rem', lineHeight: '1.7rem' }}>
							A designer who loves to find digital solutions for real problems
						</p>
						<p className="text-white mobile-intro4" style={{ fontSize: '1.3rem', lineHeight: '1.7rem' }}>
							I'm a Sri Lankan who skilled on Web Developing and Graphic Designing.&nbsp;Currently i'm a
							<br />
							student&nbsp;undergraduate at University Of Peradeniya through BSc. Statistics and
							Operations Research.
						</p>
					</div>
					<div className="col-md-12 col-lg-5 text-center">
						<img  alt="Navindu Kavishka Intro" className="intro-img" src={introimg} height="500px" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
