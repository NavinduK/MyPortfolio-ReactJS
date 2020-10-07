import React from 'react';
import img1 from './assets/img/desk.jpg';
import img2 from './assets/img/building.jpg';
import img3 from './assets/img/loft.jpg';

const Gallery = () => {
	return (
		<div>
			<div className="gradient photo-gallery">
				<div className="container">
					<div className="intro">
						<h2 className="text-center">Lightbox Gallery</h2>
					</div>
					<div className="row photos">
						<div className="col-sm-4 col-md-3 col-lg-2 item zoom-on-hover">
							<a data-lightbox="photos" href={img1}>
								<img className="img-fluid" src={img1} />
							</a>
						</div>
						<div className="col-sm-4 col-md-3 col-lg-2 item zoom-on-hover">
							<a data-lightbox="photos" href={img2}>
								<img className="img-fluid" src={img2} />
							</a>
						</div>
						<div className="col-sm-4 col-md-3 col-lg-2 item zoom-on-hover">
							<a data-lightbox="photos" href={img3}>
								<img className="img-fluid" src={img3} />
							</a>
						</div>
						<div className="col-sm-4 col-md-3 col-lg-2 item zoom-on-hover">
							<a data-lightbox="photos" href={img2}>
								<img className="img-fluid" src={img2} />
							</a>
						</div>
						<div className="col-sm-4 col-md-3 col-lg-2 item zoom-on-hover">
							<a data-lightbox="photos" href={img3}>
								<img className="img-fluid" src={img3} />
							</a>
						</div>
						<div className="col-sm-4 col-md-3 col-lg-2 item zoom-on-hover">
							<a data-lightbox="photos" href={img1}>
								<img className="img-fluid" src={img1} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
