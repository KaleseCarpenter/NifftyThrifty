//inside react component will always be a :render and :return
//Capitalization matters
const React = require("react");

class Show extends React.Component {
  render() {
     //props = properties which is data that you want to pass to a component.
      //this is how we get access to our products
    const products = this.props.products;
    return (
      //Return statement MUST have one main parent for this component, can use div or React.Fragment  
      <>
        <h1> Show Page </h1>
        The {products.name} are {products.price}
        {" "}
        {products.readyToPurchase ? ", and Ready To Be Purchased" : ", We may be out of Stock. Check Back Later "}
      </>
    );
  }
}
module.exports = Show;
