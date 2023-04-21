import React from "react";

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The Avenger",
      plot: "Super Natural power shown in the movies",
      price: "Rs.189",
      rating: 8.9,
      star: 0,
      fav: false,
      cart: false,
    };
  }
  // handleInc=()=>{
  //   // console.log("this:",this);
  //   this.setState({
  //     stars:this.state.star+0.5
  //   })
  handleCart = () => {
    this.setState({
      cart: !this.state.cart,
    });
  };
  handle = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };

  addStars = () => {
    //Form 1 of setState() - increasing the star count by 0.5
    this.setState({
      star: this.state.star + 0.5,
    });
  };
  render() {
    const { title, plot, price, rating, star, fav, cart } = this.state;
    return (
      <>
        <div>
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
            alt="images"
            width={100}
          />
        </div>
        <h3>{title}</h3>
        <p>{plot}</p>
        <div>{price}</div>
        <div>{rating}</div>
        <div>
          <img
            alt="minus"
            src="https://cdn-icons-png.flaticon.com/512/43/43625.png"
            width={10}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt="icon"
            width="10px"
          />
          {/* <img onClick={this.handleInc.bind(this)} */}
          <img
            onClick={this.addStars}
            alt="plus"
            src="https://cdn-icons-png.flaticon.com/512/748/748113.png"
            width={10}
          />
          <div>{star}</div>
        </div>
        {fav ? (
          <button onClick={this.handle}>Favorite</button>
        ) : (
          <button onClick={this.handle}>Un-Favorite</button>
        )}
        <div>
          {cart ? (
            <button onClick={this.handleCart}>Add to Cart</button>
          ) : (
            <button onClick={this.handleCart}>Remove the Cart</button>
          )}
        </div>
      </>
    );
  }
}
export default MovieList;
