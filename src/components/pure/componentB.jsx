//* Componente hijo "User"
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';

const ComponentB = ({ contacto }) => {
	const [state, setState] = useState(contacto.conectado);

	const handlerChange = () => {
		setState(
			contacto.conectado
				? (contacto.conectado = false)
				: (contacto.conectado = true)
		);
	};

	return (
		<div className="compB">
			<h3>Este es el componente B</h3>
			<p>Nombre: {contacto.nombre}</p>
			<p>Apellido: {contacto.apellido}</p>
			<p>Email: {contacto.email}</p>
			<h4>Estado: {state ? 'Contacto En Línea' : 'Contacto No Disponible'}</h4>
			<button onClick={handlerChange}>Cambiar estado de conexion</button>
		</div>
	);
};

ComponentB.propTypes = {
	contacto: PropTypes.instanceOf(Contacto).isRequired,
};

export default ComponentB;
