$(() => {
	$('#card-view-btn').on('click', function () {
		$('.patients-card-view').removeClass('no-display');
		$('.patients-table-view').addClass('no-display');
	});

	$('#table-view-btn').on('click', function () {
		$('.patients-table-view').removeClass('no-display');
		$('.patients-card-view').addClass('no-display');
	})
})
