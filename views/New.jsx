const React = require("react");


class New extends React.Component {
  render() {
    return(
        <>
           <form action="/products" method="POST">
                Product Name: <input placeholder="Add Product Name"type="text" name="name" /><br/>   
                 Price: <input placeholder="Add Price"type="text" name="price" /><br/>
                 Is Ready For Purchase: <input type="checkbox" name="readyToPurchase" /><br/>
                 <input type="submit" name="" value="Create New Item"/>
            </form>
        </>
    )
  }
}

module.exports = New;