//* creamos una clase como plantilla para nuestras instancias
export class Contacto {
	//* Valores por defecto de nuestra clase
	nombre = '';
	apellido = '';
	email = '';
	conectado = false;
	constructor(nombre, apellido, email, conectado) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.conectado = conectado;
	}
}
