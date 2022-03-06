const form = document.forms[0]
const input = document.querySelector('#email')
const error = document.querySelectorAll('.error')

form.onsubmit = function (e) {
	e.preventDefault()
}

input.addEventListener('invalid', showError)
input.addEventListener('change', removeError)

function showError() {
	error.forEach((el) => {
		el.style.opacity = '1'
	})
}

function removeError() {
	error.forEach((el) => {
		el.style.opacity = '0'
	})
}
