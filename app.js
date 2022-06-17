// import data from "./data.json";
var options = {
  chart: {
    type: "bar",
    background: "#fff",
  },
  //   dataLabels: {
  //     enabled: false
  // },
  series: [
    {
      name: "money",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
    },
  ],
  noData: {
    text: "Loading...",
  },
  xaxis: {
    day: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
  fill: {
    colors: ["#F44336"],
  },
  dataLabels: {
    style: {
      colors: ["#fff"],
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
