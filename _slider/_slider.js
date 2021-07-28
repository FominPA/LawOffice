let doc = document;
let slaider = doc.querySelector('.slaider');
let slaiderContent = slaider.querySelectorAll('.slaider-content > *');

function searchVisibility(slaiderContent) {
	for (let i = 0; i < slaiderContent.length; i++) {
		if (slaiderContent[i].classList.contains('slaid_visibility')) return i;
	}
}

function prevSlaid() {
	
	let i = searchVisibility(slaiderContent);
	if (i != 0) {
		slaiderContent[i].classList.remove('slaid_visibility');
		slaiderContent[--i].classList.add('slaid_visibility');
	} else {
		slaiderContent[i].classList.remove('slaid_visibility');
		slaiderContent[slaiderContent.length-1].classList.add('slaid_visibility');
	}
};

function nextSlaid() {
	
	let i = searchVisibility(slaiderContent);
	if (i != slaiderContent.length-1) {
		slaiderContent[i].classList.remove('slaid_visibility');
		slaiderContent[++i].classList.add('slaid_visibility');
	} else {
		slaiderContent[i].classList.remove('slaid_visibility');
		slaiderContent[0].classList.add('slaid_visibility');
	}
};

slaider.querySelector('.slaider__arrow_left').onclick = prevSlaid;
slaider.querySelector('.slaider__arrow_right').onclick = nextSlaid;