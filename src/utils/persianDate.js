const persianDate = (d) => {
	const date = new Date(d);
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	return date.toLocaleDateString('fa-IR', options);

};

export default persianDate;


