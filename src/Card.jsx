import React from 'react';
import { NavLink } from 'react-router-dom';

function Card(props) {
	console.log(props);

	return (
		<NavLink to={`/pizza/${props.id}`}>
			<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<a href="#">
					<img className="rounded-t-lg w-full" src={props.img} alt="" />
				</a>
				<div className="p-5">
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							{props.name}
						</h5>
					</a>
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						{props.composition}
					</p>
					<a
						href="#"
						onClick={props.deleteCard}
						className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Sil
					</a>
				</div>
			</div>
		</NavLink>
	);
}

export default Card;
