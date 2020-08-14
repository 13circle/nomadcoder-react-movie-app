import React from "react";
import "./MovieDetails.css";

class MovieDetails extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const { title, summary, poster, year, genres } = location.state;
      return (
        <div className="gravity_center">
          <div className="movie_details_main">
            <div className="text_center">
              <img src={poster} />
            </div>
            <br />
            <h4>
              <label className="head_label">Title</label> {title}
            </h4>
            <h4>
              <label className="head_label">Release Yr</label> {year}
            </h4>
            <h4>
              <label className="head_label">Genre</label>
              {genres.map((genre, key, arr) => (
                <span key={key}>
                  {genre}
                  {key + 1 != arr.length ? ", " : ""}
                </span>
              ))}
            </h4>
            <br />
            <p>{summary}</p>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default MovieDetails;
