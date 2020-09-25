

var CRE=[19.5,
    23.5,
    14.5,
    23.5,
    11.6,
    23.7,
    14.9,
    17.5,
    12.2,
    16.7];
    var gold=[22,
    35.5,
    18.5,
    -14.3,
    -7,
    2.1,
    20,
    -5.5,
    4.2,
    20.8];
    
    var  residental=[21.5,
    25.9,
    9.5,
    11,
    5,
    4.6,
    8.3,
    1.4,
    5.1,
    4.3];
    var   sensex =[19.3,
    -19.5,
    14.3,
    3.7,
    36.1,
    -1.2,
    6.3,
    13,
    16,
    14.3
        
    ];
    var ctx = document.getElementById('myChart').getContext('2d');
    Chart.defaults.global.defaultFontSize=14;
    
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2009', '2010', '2011', '2012', '2013', '2014','2015','2016','2017','2018'],
            datasets: [{
                label: 'CRE', 
                data: CRE,
                backgroundColor:'rgba(0,0,0,0)',
                borderColor: 'blue',
                borderWidth: 4
            },{
                label: 'Gold', 
                data: gold,
                backgroundColor:'rgba(0,0,0,0)',
                borderDash:[10,10],
                borderColor: 'black',
                borderWidth: 2
            },{
                label: 'Residental', 
                data: residental,
                backgroundColor:'rgba(0,0,0,0)',
                borderDash:[10,10],
                borderColor: '#546712',
                borderWidth: 2
            },{
                label: 'SenSex', 
                data: sensex,
                backgroundColor:'rgba(0,0,0,0)',
                borderDash:[10,10],
                borderColor: '#777',
                borderWidth: 2
            }
        ]
        },
        options: {
            maintainAspectRatio: false,// this option is used in order to set the size of the graph responsive
            responsive:true,
           title:{
            display:true,   
            text:"CRE SHOULD BE IN EVERYONE'S PORTFOLIO. THE DATA SPEAKS FOR ITSELF",
            fontColor:'#29df99',
            fontSize:24
        }
        }
    });