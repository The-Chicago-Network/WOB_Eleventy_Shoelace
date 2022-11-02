// Remove all child nodes
export const emptyNest = (target) => {
	while (target.lastChild) {
		target.removeChild(target.lastChild);
	}
}
