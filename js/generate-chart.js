
$(document).ready(function(){
    
    setInterval( function () {
        for(var i = 1 ; i < 4 ; i++){
            var ctx = document.getElementById(('samplechart'+i));
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                label: {
                    display: true,
                    text: 'of # CPU(s)'
                },
                data: {
                    datasets: [{
                        label:['Used','Unused'],
                        data: [80, 20],
                        backgroundColor: ['#55a4ce','#bcd7e5'],
                        borderColor: ['#55a4ce','#bcd7e5']
                    }],
                    
                },
                options: {
                    cutoutPercentage: 80,
                    title: {
                        display: true,
                        text: "Sample Graph",
                        position: 'top',
                        fontSize: 18
                    },
                    maintainAspectRatio: false,
                },
                
                
            });
        }
    },5000)
    setInterval( function () {
        for(var i = 4 ; i < 8 ; i++){
            var ctx = document.getElementById(('samplechart'+i));
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                        label: 'Data Wamplo',
                        data: [12, 19, 3, 5, 2, 3],
                        borderColor: [
                            '#000000',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Sample Graph",
                        position: 'top'
                    },
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
        }
    },5000)
    


});