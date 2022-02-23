const ctx = document.getElementById('linechart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['مهر', 'ابان', 'آذر', 'دی', 'بهمن', 'اسفند' , 'اردیبهشت', 'خرداد'],
        datasets: [{
            label: 'مجموع کارمزد',
            data: [2050, 2800, 2500, 2990, 1750 , 1900, 3100, 2000],
            backgroundColor: [
                'rgba(85, 85, 85, 1)'
               
            ],
            borderColor: [
                'rgb(41, 155, 99)'
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true}
});