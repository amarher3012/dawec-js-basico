const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const submit = document.querySelector('button');

// Funcion de validacion de inputs
function validateInput(input) {
	const parentDiv = input.closest('div'); //.closest('div') busca el div mas cercano a ese input
	const errorSpan = parentDiv.querySelector('span');

	let isValid = true;
	// Checks para cada input.id
	if (input.id === 'name' && /^$/.test(input.value)) {
		isValid = false;
		// Comprobamos que no hay un errorSpan ya activo
		if (!errorSpan) {
			// Si no lo hay se crea un span y se inserta en parentDiv
			const error = document.createElement('span');
			error.textContent = 'Introduce tu nombre';
			parentDiv.appendChild(error);
		}
	} else if (
		input.id === 'email' &&
		!/^[\w]+@[\w]+\.(com|net|me)$/.test(input.value)
	) {
		isValid = false;
		if (!errorSpan) {
			const error = document.createElement('span');
			error.textContent = 'Introduce un email valido';
			parentDiv.appendChild(error);
		}
	} else if (
		input.id === 'password' &&
		!/(?=(.*[a-zA-Z]){8,})(?=(.*\d)){1,}/.test(input.value)
	) {
		isValid = false;
		if (!errorSpan) {
			const error = document.createElement('span');
			error.textContent = 'Introduce una contrasena valida';
			parentDiv.appendChild(error);
		}
	} else if (input.id === 'password-check') {
		const originalPassword = document.querySelector('#password');
		if (originalPassword.value !== input.value) {
			isValid = false;
			if (!errorSpan) {
				const error = document.createElement('span');
				error.textContent = 'Las contrasenas no coinciden';
				parentDiv.appendChild(error);
			}
		}
	} else if (
		input.id === 'math-check' &&
		!/^\d+(\+|\-|\*|\/)\d+\=\d+$/.test(input.value)
	) {
		isValid = false;
		if (!errorSpan) {
			const error = document.createElement('span');
			error.textContent = 'Introduce una formula matematica';
			parentDiv.appendChild(error);
		}
	} else if (input.id === 'conditions' && !input.checked) {
		isValid = false;
		if (!errorSpan) {
			const error = document.createElement('span');
			error.textContent = 'Acepta las condiciones';
			parentDiv.appendChild(error);
		}
	}

	// Comprueba si no hay un error, y si errorSpan esta presente. Si es asi se elimina errorSpan
	if (isValid && errorSpan) {
		errorSpan.remove();
	}

	return isValid;
}

// Event listeners para cada input con la funcion previa
inputs.forEach((input) => {
	input.addEventListener('input', () => {
		validateInput(input);
	});
});

// Event listener para el submit del form
form.addEventListener('submit', (e) => {
	let isFormValid = true;

	inputs.forEach((input) => {
		if (!validateInput(input)) {
			isFormValid = false;
		}
	});

	if (!isFormValid) {
		e.preventDefault();
		alert('Arregla los errores.');
	}
});
