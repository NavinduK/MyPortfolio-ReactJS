import React from 'react';
import '../components/assets/css/lightgallery.css';
import { SRLWrapper } from 'simple-react-lightbox';
import AOS from 'aos';
AOS.init();

const Graphic = ({ data }) => {

	return (
			<>
			{data[0]?.img
				?

				<div className="container" style={{minHeight: '100vh',marginBottom:'2vh'}}>
						<div className="m-0 row justify-content-center">
							<h2 data-aos="fade-down" data-aos-duration="1300" className="text-center" style={{ marginBottom: '3vh', marginTop: '95px', fontSize: '2rem' }}>
								Graphic Design
							</h2>
						</div>
						<div className="m-0 row justify-content-center">
							<SRLWrapper>
								<div className="row m-0 justify-content-center">
									{
										data?.map((item, i) => (
											<div data-aos="flip-left" data-aos-offset="-1000" data-aos-delay={`${(i * 100)}`} key={i} className="text-center mb-3 p-0 col-6 col-sm-4 col-lg-3">
												<a className="m-auto" href={item.img}>
													<img style={{ width: '95%' }} src={item.thumb} alt={item.desc} />
												</a>
											</div>
										))
									}
								</div>
							</SRLWrapper>
						</div>
				</div>
				:
				<div style={{ minHeight:'100vh'}} className="row justify-content-center align-content-center">
					<div style={{ color: '#A73AC1' }} className="spinner-border" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			}
			</>
	);
};

export default Graphic;
