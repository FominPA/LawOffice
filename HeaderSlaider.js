let doc = document;
let slaider = doc.querySelector('.slaider');
let slaiderContent = slaider.querySelectorAll('.slaider-content > *');

function searchVisibility(slaiderContent) {
	for (let i = 0; i < slaiderContent.length; i++) {
		if (slaiderContent[i].classList.contains('visibility')) return i;
	}
}

function prevSlaid() {
	
	let i = searchVisibility(slaiderContent);
	if (i != 0) {
		slaiderContent[i].classList.remove('visibility');
		slaiderContent[--i].classList.add('visibility');
	} else {
		slaiderContent[i].classList.remove('visibility');
		slaiderContent[slaiderContent.length-1].classList.add('visibility');
	}
};

function nextSlaid() {
	
	let i = searchVisibility(slaiderContent);
	if (i != slaiderContent.length-1) {
		slaiderContent[i].classList.remove('visibility');
		slaiderContent[++i].classList.add('visibility');
	} else {
		slaiderContent[i].classList.remove('visibility');
		slaiderContent[0].classList.add('visibility');
	}
};

slaider.querySelector('#left-arrow').onclick = prevSlaid;
slaider.querySelector('#right-arrow').onclick = nextSlaid;