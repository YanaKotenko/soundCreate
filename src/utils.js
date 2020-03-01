export const slideIn = (element) => {
	setTimeout(() => {
		element.list.style.transform = 'translateX(0)'
	}, 100)
	setTimeout(() => {
		element.img.style.transform = 'translateX(0)'
	}, 200)
	setTimeout(() => {
		element.title.style.transform = 'translateX(0)'
	}, 300)
}
export const slideOut = (element) => {
	setTimeout(() => {
		element.list.style.transform = 'translateX(-400%)'
	}, 100)
	setTimeout(() => {
		element.img.style.transform = 'translateX(-400%)'
	}, 200)
	setTimeout(() => {
		element.title.style.transform = 'translateX(-400%)'
	}, 300)
}