import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export default function TopArtist(props) {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Last FM Top Artist , March 2020",
    },
    subtitle: {
      text:
        'Click to listen Top Artists. Source: <a href="https://www.last.fm/charts" target="_blank">lastfm.com</a>',
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Total Number of Listeners",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 1,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}",
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>',
    },
    series: [
      {
        name: "Artists",
        colorByPoint: true,
        data: props.data,
      },
    ],
  };
  console.log(props.data)
  return (
    <div className={"top-artist"} style={style}>
      <HighchartsReact highcharts={Highcharts} options={options} />{" "}
    </div>
  );
}

const style = {
  width: "50vw",
};
