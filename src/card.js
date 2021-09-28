import React from 'react';

const Card = () => {
	return(
		<div calssName ='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='Photo' src= 'https://robohash.org/test?200*200' />
			<div>
				<h2> Jone Doe </h2>
				<p> Jone.doe@gamil.com </p>
			</div>
		</div>
	);
}

export default Card;