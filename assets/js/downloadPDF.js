import { jsPDF } from 'jspdf';

export const downloadPDF = (docTitle) => {
	const doc = new jsPDF('p','in','letter');

	doc.addHTML(document.body,() => {
		doc.save(`${docTitle}.pdf`)
	});
	console.log("Hi");
}
