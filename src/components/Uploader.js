import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import { Button } from 'muicss/react';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import './Uploader.css';


const thumb = {
	display: 'inline-flex',
	borderRadius: 2,
	border: '1px solid #eaeaea',
	marginBottom: 8,
	marginRight: 8,
	width: 100,
	height: 100,
	padding: 4,
	boxSizing: 'border-box',
};

const thumbInner = {
	display: 'flex',
	minWidth: 0,
	overflow: 'hidden',
};

const img = {
	display: 'block',
	width: 'auto',
	height: '100%',
};

export function Uploader(props) {
	const [files, setFiles] = useState([]);
	const [filename, setFilename] =useState('')
	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/*',
		onClick: true,
		noKeyboard: true,
		onDrop: acceptedFiles => {
			setFiles(
				acceptedFiles.map(file => {
					setFilename(file.name)
					return Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				}
				)
			);
		},
	});

	const thumbs = files.map(file => (
		<div style={thumb} key={file.name}>
			<div style={thumbInner}>
				<img src={file.preview} style={img} alt="" />
			</div>
		</div>
	));

	useEffect(
		() => () => {
			files.forEach(file => URL.revokeObjectURL(file.preview));
		},
		[files]
	);

	return (
		<section className="thumbsContainer">
			<div {...getRootProps({ className: 'dropzone' })}>
				<input {...getInputProps()} />
				<p>Drag 'n' drop some files here, or click to select files</p>
				<em>(Only *.jpeg and *.png images will be accepted)</em>
				<Button className="button"><FontAwesomeIcon icon={ faCloudUploadAlt } />{ ` Upload` }</Button>
			</div>
			<div>{thumbs}</div>
			<div>
				<Link to={ `/solution/${props.id}/${filename}` }>
					<Button className="button" type="button">
						<FontAwesomeIcon icon={faChartBar} /> Run Analysis
					</Button>
				</Link>
			</div>
		</section>
	);
}
