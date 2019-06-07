import React from 'react';
import { Container } from 'muicss/react';
import './CropTab.css';
import { Link } from '@reach/router';

export function CropTab(props) {
	return (
		<Link to={`/uploader/${props.type}`}>
			<Container fluid={true} className="box cropType-container">
				<img src={props.icon} alt="" />
				<div className="column">
					<h3 className="row">{props.type}</h3>
					<p className="row">{props.description}</p>
				</div>
			</Container>
		</Link>
	);
}
