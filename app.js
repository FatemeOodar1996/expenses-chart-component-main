// import data from "./data.json";
var options = {
  chart: {
    type: "bar",
  },
  //   dataLabels: {
  //     enabled: false
  // },
  series: [
    // {
    //   name: "money",
    //   data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
    // },
  ],
  noData: {
    text: "Loading...",
  },
  xaxis: {
    day: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

var url = "http://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly";

$.getJSON(url, function (response) {
  chart.updateSeries([
    {
      name: "Sales",
      data: response,
    },
  ]);
});
