export const slideIn = (element, isMobile) => {
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
export const slideOut = (element, isMobile) => {
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
export const TIMEOUT_SPEED = 500
