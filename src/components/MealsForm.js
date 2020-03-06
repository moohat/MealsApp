import React from 'react';

export default class MealsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      type: ''
    }

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangetype = this.onChangetype.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onChangeName(event) {
    this.setState({ name: event.target.value });
  }

  onChangetype(event) {
    this.setState({ type: event.target.value });
  }

  onSubmitForm(event) {
    event.preventDefault();
    this.props.addData(this.state);
    this.setState({
      name: '',
      type: ''
    });
  }


  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">name</label>
          <div className="col-sm-10">
            <input className="form-control" type="text" value={this.state.name} placeholder="ketikkan name" onChange={this.onChangeName} />
          </div>
        </div>
        
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">type</label>
          <div className="col-sm-10">
            <select className="form-control" name="type" value={this.state.type} onChange={this.onChangetype}>
              <option value="" disabled>Choose the type..</option>

              <option value="appetizer">appetizer</option>

              <option value="main-course">main-course</option>

              <option value="dessert">dessert</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button className="btn btn-primary" type="submit">Simpan</button>
          </div>
        </div>
      </form>
    )
  }
}
