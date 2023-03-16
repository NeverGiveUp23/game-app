import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "Miami", "Florida", "California"];
    
  // if(items.length == 0){
  //   return <><h1>Cities</h1><p>No items found</p></>
  // }
//  const getMessage = () => {
// const message = items.length == 0 ? <p>No items found</p> : null;
//  }
  

  return (
    <>
      <h1>Cities</h1>
      {items.length == 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={() => console.log(item, index)} >{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
