export const showElements = (element) => {
	setTimeout(() => {
		element.list.style.height = '290px'
	}, 200)
	setTimeout(() => {
		element.img.style.height = '290px'
	}, 400)
	setTimeout(() => {
		element.title.style.transform = 'translateY(0)'
	}, 600)
}

export const hideElements = (element) => {
	setTimeout(() => {
		element.list.style.height = '0'
	}, 600)
	setTimeout(() => {
		element.img.style.height = '0'
	}, 400)
	setTimeout(() => {
		element.title.style.transform = 'translateY(-100%)'
	}, 200)
}