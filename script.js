var TextContent = function(container, button) {
	if (!button && !container) {
		return;
	}
	var orginalPosition = button.style.position;
	var orginalContainerHeight = window.getComputedStyle(container).height.replace('px', '');
	var buttonHeight = window.getComputedStyle(button).height.replace('px', '');

	var htmlHeight = document.getElementsByTagName('html')[0].offsetHeight;

	var rerender = function() {
		if (htmlHeight >= window.innerHeight) {
			//make buttonElement position fixed
			if (button.style.position != 'fixed') {
				button.style.position = 'fixed';
				button.style.bottom = '0';
				console.log(orginalContainerHeight);
				container.style.height = parseInt(orginalContainerHeight) + parseInt(buttonHeight) + 'px';
				console.log(container.style.height);
			}
		} else {
			button.style.position = orginalPosition;
			container.style.height = orginalContainerHeight + 'px';
		}
	}
	window.addEventListener('resize', rerender);
	rerender();
};

window.addEventListener('load', function() {
	new TextContent(document.getElementById('content'), document.getElementById('button'));
});
