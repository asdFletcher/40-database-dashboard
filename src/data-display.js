import React from 'react';
import { connect } from 'react-redux';
import util from 'util';
import { Bar } from 'react-chartjs-2';

const mapStateToProps = (store) => {
  return (
    {
      data: store,
    }
  )
}

export const DataDisplay = (props) => {
  let names = [];
  for( let key in props.data ) {
    names.push(key);
  }


  let dataSet = names.map( dataName => {
    return props.data[dataName];
  });

  const data = {
    labels: [...names],
    datasets: [{
      label: 'Database actions',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [...dataSet]
    }]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }],
    }
  }

  const style = {
    position: "relative"
    , height: 400+"px"
    , width: 800+"px"
  };

  return (
    <>
      <div>Create: {props.data.create}</div>
      <div>Update: {props.data.update}</div>
      <div>Delete: {props.data.delete}</div>
      <div style={style}>
        <Bar data={data} options={options}/>
      </div>
    </>
  );
}


export default connect(mapStateToProps)(DataDisplay);