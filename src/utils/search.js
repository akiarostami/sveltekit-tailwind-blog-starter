const fuzzySearch = (items, query) => {
	let search = query?.toLowerCase().split(' ');

	console.log('search >>>', search);
	let ret = items.reduce((found, i) => {
		let matches = 0;
		search.forEach((s) => {
			let props = 0;
			for (var prop in i) {
				let p = i[prop]?.toString().toLowerCase();
				if (p?.indexOf(s) > -1) {
					props++;
				}
			}
			if (props >= 1) {
				matches++;
			}
		});
		if (matches == search.length) {
			found.push(i);
		}
		return found;
	}, []);
	return ret;
};

export default fuzzySearch;
