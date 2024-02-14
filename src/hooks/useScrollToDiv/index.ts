export function useScrollToDiv(divId: string) {
	let div = document.getElementById(divId)
	if (!div) {
		console.error(`Div não encotrada! ${divId}`)
		return
	}
	div.scrollIntoView({ behavior: 'smooth' })
}
