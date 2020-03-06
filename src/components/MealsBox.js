/* eslint-disable no-dupe-class-members */
import React from 'react';

import MealsTable from './MealsTable';
import MealsForm from './MealsForm';
import {request} from '../constans';


export default class MealsBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {data: []};
  }

  componentDidMount() {
    // const self = this;
    request.post('datatable.food-category').then((result) => {
        console.log(result.data.data);
        this.setState({
            data: result.data.data,
        });
    })
        .catch(error => console.log(error));

}

  addData = (meals) => {
    this.setState((prevState)=> ({
            
      data: [...prevState.data, {id: prevState.data.reduce((maxId, data) => Math.max(data.id, maxId), -1) + 1, name: meals.name, type: meals.type, sent: true}]
    }))
    request.post('food-category.store',{
      name: meals.name,
      type: meals.type
    })
    .then(function (response) {
console.log(response.data);

    })
    .catch(function (error) {
      this.setState((prevState)=> ({
        data: prevState.data.map(item => {
          // if(id === item.id){
          //   item.sent = false;z
          // }
          return item;
        })
      }))
    }.bind(this))
  }



 

  render(){
    return (
      <div className="container">
      <h1>Meals List</h1>
      
      <MealsForm addData={this.addData} />
      {/* <MealsTable data={this.state.data} editData={this.editData} /> */}
      <MealsTable data={this.state.data} />
      
      </div>
    );
  }
}
