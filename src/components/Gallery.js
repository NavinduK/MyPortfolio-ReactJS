import React from 'react';
import img1 from './assets/img/desk.jpg';
import img2 from './assets/img/building.jpg';
import img3 from './assets/img/loft.jpg';

const Gallery = () => {
	return (
		<div>
			<div className="photo-gallery">
				<div className="container">
					<div className="intro" style={{ marginTop:'3vh'}}>
						<h2 className="text-center" style={{ fontSize: '2rem', marginBottom:'5vh'}}>Graphic Design</h2>
					</div>
					<div className="row photos">
						<div className="col-sm-6 col-md-3 col-lg-3 item zoom-on-hover">
							<a data-lightbox="photos" href={img1}>
								<img className="img-fluid" alt="Gallery Image1" src={img1} />
							</a>
						</div>
						<div className="col-sm-6 col-md-3 col-lg-3 item zoom-on-hover">
							<a data-lightbox="photos" href={img2}>
								<img className="img-fluid" alt="Gallery Image2" src={img2} />
							</a>
						</div>
						<div className="col-sm-6 col-md-3 col-lg-3 item zoom-on-hover">
							<a data-lightbox="photos" href={img3}>
								<img className="img-fluid" alt="Gallery Image3" src={img3} />
							</a>
						</div>
						<div className="col-sm-6 col-md-3 col-lg-3 item zoom-on-hover">
							<a data-lightbox="photos" href={img2}>
								<img className="img-fluid" alt="Gallery Image4" src={img2} />
							</a>
						</div>
						<div className="col-sm-6 col-md-3 col-lg-3 item zoom-on-hover">
							<a data-lightbox="photos" href={img3}>
								<img className="img-fluid" alt="Gallery Image5" src={img3} />
							</a>
						</div>
						<div className="col-sm-6 col-md-3 col-lg-3 item zoom-on-hover">
							<a data-lightbox="photos" href={img1}>
								<img className="img-fluid" alt="Gallery Image6" src={img1} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
