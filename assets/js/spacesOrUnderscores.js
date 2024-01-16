// Convert spaces to underscores or vice versa
export const spacesOrUnderscores = (string) => {
	return string.indexOf(' ') > -1 ? string.replace(/ /g, '_') : string.replace(/_/g, ' ');
};
