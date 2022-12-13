export default function getAttr(str, elem, attr) {
	// const regex = new RegExp(`<${elem} [^>]*?${attr}=(["\'])?((?:.(?!\1|>))*.?)\1?`, 'gi');
	const regex = new RegExp(`<${elem}[^>]*?${attr}=(["\\'])?((?:.(?!\\1|>))*.?)\\1?`, 'ig');
	let res = regex.exec(str);
	return res.length >= 0 ? res[2] : null;
}
