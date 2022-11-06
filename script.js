var xyValues = [
    {x:50, y:7},
    {x:60, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:10},
    {x:110, y:11},
    {x:120, y:14},
    {x:130, y:14},
    {x:140, y:15}
];

new Chart (
    "myChart", 
    {
        type: "scatter",
        data: {
            datasets : [{
                pointRadius: 4,
                pointBackgroundColor: "rgba(0,0,255,1)",
                data: xyValues
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{ticks: {min:40, max:160}}],
                yAxes: [{ticks: {min:6, max:16}}]
            }
        }
    }
);

// Line chart

xValues = [50,60,70,80,90,100,110,120,130,140,150]
yValues = [7,8,8,9,9,10,11,14,14,15]

new Chart(
    "myLine",
    {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Line Chart"
            },
            legend: {
                display: false
            },
            scales: {
                yAxes: [{ticks: {min: 6, max:16}}],
            }
        }
    }
)

// Bar Chart

var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myBars", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});

// Pie Chart

var xValues = ["Italy", "France", "Spain", "USA", "Argentina"]
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myPie", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
})
