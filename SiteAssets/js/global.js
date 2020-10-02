$(() => {
	pageTitleSorter();
})

function pageTitleSorter() {
	var url = window.location.href;

	if (url.includes('dashboard')) {
		$('.page-title').html('dashboard');
	} else if (url.includes('patients')) {
		$('.page-title').html('patients')
	} else if (url.includes('details')) {
		$('.page-title').html('details')
	} else if (url.includes('procurement')) {
		$('.page-title').html('procurement')
	} else if (url.includes('specialists')) {
		$('.page-title').html('specialists')
	} else if (url.includes('notifications')) {
		$('.page-title').html('notifications')
	}
}
