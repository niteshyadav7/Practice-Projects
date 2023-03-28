import React from "react";

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The Avenger",
      plot: "Super Natural power shown in the movies",
      price: "Rs.189",
      rating: 8.9,
    };
  }
  render() {
    const {title,plot,price,rating}=this.state;
    return (
      <>
        <div>
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
            alt="images"
            width={100}
          />
        </div>
        <h3>{this.state.title}</h3>
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
          <img
            alt="plus"
            src="https://cdn-icons-png.flaticon.com/512/748/748113.png"
            width={10}
          />
        </div>
      </>
    );
  }
}
export default MovieList;
