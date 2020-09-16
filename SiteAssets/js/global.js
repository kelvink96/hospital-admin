$(() => {
	pageTitleSorter();
})

function pageTitleSorter() {
	var url = window.location.href;

	if (url.includes('dashboard')) {
		$('.page-title').html('dashboard');
	} else if (url.includes('patients')) {
		$('.page-title').html('patients')
	}
}
