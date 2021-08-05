const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
	panel.addEventListener('click', () => {
		removeactivepanels();
		panel.classList.add('active');
	});
});

const removeactivepanels = () => {
	panels.forEach(panel => {
		panel.classList.remove('active');
	});
};
