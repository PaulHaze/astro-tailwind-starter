export function changeTheme() {
	const element = document.documentElement;
	const theme = element.classList.contains('dark') ? 'light' : 'dark';

	const css = document.createElement('style');

	css.appendChild(
		document.createTextNode(
			`* {
           -webkit-transition: none !important;
           -moz-transition: none !important;
           -o-transition: none !important;
           -ms-transition: none !important;
           transition: none !important;
        }`
		)
	);
	document.head.appendChild(css);

	if (theme === 'dark') {
		element.classList.add('dark');
		element.setAttribute('data-theme', 'dark');
	} else {
		element.classList.remove('dark');
		element.setAttribute('data-theme', 'light');
	}

	window.getComputedStyle(css).opacity;
	document.head.removeChild(css);
	localStorage.theme = theme;
}
