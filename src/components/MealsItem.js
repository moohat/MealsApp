import React, { Component } from 'react';
import axios from 'axios';
// import {request} from '../constans';
const API_URL = 'http://api.wibs.sch.id/v2/meal/post';

const request = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: { 'Application-Token': 'geSzgVahOlowulcgHEtQmu9Ybofk1lRnPFd3V5atSEu1SD1dt2' }
});

class MealsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editButton: false,
      id: props.id,
      name: this.props.meals.name || '',
      type: this.props.meals.type || '',
    }
    this.handleEditOn = this.handleEditOn.bind(this)
    this.handleEditOff = this.handleEditOff.bind(this);
  }

  handleNameChange = e => {
    const name = e.target.name;
    // const type = e.target.type;
    this.setState({ [name]: e.target.value });
    // this.setState({ [type]: e.target.value });
  };
  handleEditOn(e) {
    e.preventDefault();
    this.setState({ editButton: true });
  }

  handleEditOff(e) {
    e.preventDefault()
    this.setState({ editButton: false })

  }

  handleEditSave = (e) => {
    e.preventDefault();    
    const {  name, type } = this.state;
    request.post(`food-category.update/?id=${this.props.meals.id}&name=${name}&type=${type}`, {
      name: name,
      type: type
    }).then(result => {
      console.log('data handleEditSave > ', name, type);
      this.setState({ editButton: false, name: "", state:"",  });      
    }).catch(e => {
    console.log(e);
});
  }



  render() {
    const {meals:{name, type}} = this.props;
    return (

      <tr>
        <th scope="row">{this.props.meals.id}</th>
        {!this.state.editButton && (
          <>
            <td>{name}</td>
            <td>{type}</td>
            <td>
              <button type="submit" className="btn btn-success mb-2" onClick={this.handleEditOn}>Edit</button>

            </td>
          </>
        )}
        {this.state.editButton && (
          <>
            <td>
              <div className="form-check mb-2 mr-sm-2">
                <input type="text"
                  className="form-control mb-2 mr-sm-2"
                  name="name"
                  defaultValue={name}
                  placeholder="name"
                  onChange={this.handleNameChange.bind(this)} />
              </div>
            </td>
            <td>
              <div className="form-check mb-2 mr-sm-2">
                {/* <input type="text"
                            className="form-control mb-2 mr-sm-2"
                            placeholder="type"
                            name="type"
                            value={this.state.type}
                            onChange={this.handleNameChange.bind(this)} /> */}
                <select className="form-control" name="type" value={this.state.type} onChange={this.handleNameChange.bind(this)}>

                  <option value="appetizer">appetizer</option>

                  <option value="main-course">main-course</option>

                  <option value="dessert">dessert</option>
                </select>
              </div>
            </td>
            <td>
              <button type="submit" className="btn btn-primary mb-2" onClick={this.handleEditSave}>save</button>
              <button type="submit" className="btn btn-danger mb-2" onClick={this.handleEditOff}>Cancel</button>
            </td>


          </>
        )}
      </tr>
      
    )

  }
}

// function MealsItem(props){
//   if(props.meals.sent){
//     return (
//       <tr>
//       <td>{props.meals.name}</td>
//       <td>{props.meals.type}</td>
//       <td>
//       <button className="btn btn-success" type="button" onClick={this.handleEditOn}>Edit</button>
//       {/* <button className="btn btn-danger" type="button">Delete</button> */}
//       </td>
//       </tr>
//     )
//   }else{
//     return (
//       <tr>
//       <td>{props.meals.name}</td>
//       <td>{props.meals.type}</td>
//       <td>
//       <button className="btn btn-warning" type="button">Resend</button>
//       </td>
//       </tr>
//     )
//   }
// }

export default MealsItem;
