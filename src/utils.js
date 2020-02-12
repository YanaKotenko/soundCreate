export const showWorkElements = (element, isMobile) => {
	setTimeout(() => {
		element.list.style.height = `${isMobile ? element.list.children[0].offsetHeight : 290}px`
	}, 200)
	setTimeout(() => {
		element.img.style.height = `${element.img.children[0].height}px`
	}, 400)
	setTimeout(() => {
		element.title.style.transform = 'translateY(0)'
	}, 600)
}

export const hideWorkElements = (element) => {
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

export const showAboutElements = (element) => {
	setTimeout(() => {
		element.aboutTitle.style.height = '290px'
	}, 200)
	setTimeout(() => {
		element.aboutImg1.style.height = '490px'
	}, 400)
	setTimeout(() => {
		element.aboutImg2.style.height = '490px'
	}, 600)
	setTimeout(() => {
		element.aboutImg3.style.height = '490px'
	}, 800)
	setTimeout(() => {
		element.aboutMainImg.style.height = '290px'
	}, 600)
}

export const hideAboutElements = (element) => {
	setTimeout(() => {
		element.aboutTitle.style.height = '0'
	}, 200)
	setTimeout(() => {
		element.aboutImg1.style.height = '0'
	}, 400)
	setTimeout(() => {
		element.aboutImg2.style.height = '0'
	}, 600)
	setTimeout(() => {
		element.aboutImg3.style.height = '0'
	}, 600)
	setTimeout(() => {
		element.aboutMainImg.style.height = '0'
	}, 600)
}