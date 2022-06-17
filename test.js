var url = "http://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly";

$.getJSON(url, function (response) {
  chart.updateSeries([
    {
      name: "Sales",
      data: response,
    },
  ]);
});
