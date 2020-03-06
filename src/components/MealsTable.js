import React from 'react';

import MealsItem from './MealsItem';

function MealsTable(props){
  // let nodes = props.data.map((item) => <MealsItem key={item.id} meals={item} />)
  const nodes = props.data.map((item) =>{
    return (<MealsItem key={item.id} meals={item}  />)
  })
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {nodes}
      </tbody>
    </table>
  )
}

export default MealsTable;
