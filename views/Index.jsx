const React = require("react");
class Index extends React.Component {
  render() {
    const { products } = this.props;
    return (
      // Ternary =>  "whateverLogic" ? " ifItsTrue" : "ifItsNot"
      <>
        <h1>Nifty Thriffty Index Page </h1>
        <nav>
            <a href="/products/new">Create  New Item</a>
        </nav>
        <ul>
          {products.map((product, i) => {
            return (
              <li>
                The <a href={`./products/${i}`}>{product.name}</a> is {product.price}{" "}
                <br></br>
                {product.readyToPurchase ? "Its Ready" : " Its NOT"}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
module.exports = Index;