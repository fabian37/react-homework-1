//* Componente padre "Users"
import React from 'react';
import { Contacto } from '../../models/contacto.class';

import ComponentB from '../pure/componentB';

const ComponentA = () => {
	const fabian = new Contacto(
		'Fabian',
		'Gomez',
		'fabian37gomez@gmail.com',
		false
	);

	return (
		<div className="compA">
			<h2>Este es el componente A</h2>
			<ComponentB contacto={fabian} />
		</div>
	);
};

export default ComponentA;
