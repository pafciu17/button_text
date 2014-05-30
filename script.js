var ButtonPositioner = function(container, button) {
	if (!button && !container) {
		return;
	}
	var originalContainerPosition = button.style.position,
		html = document.getElementsByTagName('html')[0],
		originalContainerHeight = container.style.height;

	var getHtmlHeight = function() {
		var height = html.offsetHeight;
		if (button.style.position == 'fixed') {
			height - button.offsetHeight;
		}
		return height;
	}

	var setFixedPosition = function () {
		button.style.position = 'fixed';
		button.style.bottom = '0';
		container.style.height = parseInt(container.offsetHeight)
			+ button.offsetHeight + 'px';
	};

	var setOriginalPosition = function () {
		button.style.position = originalContainerPosition;
		button.style.height = originalContainerHeight;
	};

	var rerender = function() {
		if (getHtmlHeight() >= window.innerHeight) {
			setFixedPosition();
		} else {
			setOriginalPosition();
		}
	}
	rerender();
};

