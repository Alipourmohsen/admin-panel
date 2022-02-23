const ctxx = document.getElementById('mydoughnut').getContext('2d');
const myChartt = new Chart(ctxx, {
    type: 'doughnut',
    data: {
        labels: ['اداری', 'حق التدریس' , 'کارشناسان', 'اساتید'],
        datasets: [{
            label: ' کارمندان',
            data: [65, 20, 25, 29],
            backgroundColor: [
                'rgba(41, 155, 8, 6)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139, 1)'
                
            ],
            borderColor: [
                'rgba(41, 155, 8, 6)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true
    }
});