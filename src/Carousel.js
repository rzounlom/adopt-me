import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  //all Carousel instances share the same defaultProps, they will not change
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  // add event listener
  handleIndexClick = (event) => {
    this.setState({
      //the + sign in hte front converts string index to number
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              key={photo}
              src={photo}
              data-index={index}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
