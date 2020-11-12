$(function () {
	initCharts();
});

function bsEvents(){
	$('.onboarding-modal').modal('show');
}

function initCharts() {
	Chart.defaults.global.legend.labels.usePointStyle = true;

	var ctx = $('#bookings-chart');
	var ctx2 = $('#diseases-chart');
	var ctx3 = $('#recent-activity-chart');

	var recentActivitesChart = new Chart(ctx3, {
		type: 'line',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
			datasets: [{
				label: '# of patients',
				data: [12, 19, 3, 5, 1, 2, 4, 15],
				backgroundColor: [
					'rgba(255, 99, 132, 0.7)',
					'rgba(54, 162, 235, 0.7)',
					'rgba(255, 206, 86, 0.7)',
					'rgba(75, 192, 192, 0.7)',
				],
			}],
		},
		options: {
			legend: {
				display: true,
				position: 'bottom',
			}
		},
	})
	var bookingsChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			labels: ['urgent', 'no urgent', 'resuscitation', 'emergency'],
			datasets: [{
				label: '# of Votes',
				data: [12, 19, 3, 5],
				backgroundColor: [
					'rgba(255, 206, 86, 0.7)',
					'rgba(75, 192, 192, 0.7)',
					'rgba(54, 162, 235, 0.7)',
					'rgba(255, 99, 132, 0.7)',
				],
			}],
		},
		options: {
			legend: {
				display: true,
				position: 'bottom',
			}
		},
	})
	var diseasesChart = new Chart(ctx2, {
		type: 'doughnut',
		data: {
			labels: ['malaria', 'tuberculosis', 'pneumonia', 'diabetes'],
			datasets: [{
				label: '# of Votes',
				data: [13, 1, 8, 15],
				backgroundColor: [
					'rgba(255, 206, 86, 0.7)',
					'rgba(75, 192, 192, 0.7)',
					'rgba(54, 162, 235, 0.7)',
					'rgba(255, 99, 132, 0.7)',
				],
			}],
		},
		options: {
			legend: {
				display: true,
				position: 'bottom',
			}
		},
	})
}
