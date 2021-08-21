import Filter from "./Filter";
import "./Table.css";
import React from "react";
import Pagination from "./Pagination";

class Table extends React.Component {
  state = {
    currPage: 1,
  };

  selectPage = (value) => {
    return (
      this.setState({ currPage: value })
    );
  }

  render() {

    let allMovies = this.props.movieData;
    let currFilter = this.props.selectedFilter;


    let filteredarr = allMovies.filter((el) => {
      if (currFilter == "All Genre") {
        return el;
      }
      else if (el.genre.name == currFilter) {
        return el;
      }
    });

     filteredarr = filteredarr.filter((el) => {
       let title=el.title;
       let s=this.props.search;
       title=title.toLowerCase();
       s=s.toLowerCase();
       return title.includes(s);
    });

    let totalpage = Math.ceil(filteredarr.length / 4);

    let startind = (this.state.currPage - 1) * 4;
    let endind = Math.min(filteredarr.length, this.state.currPage * 4);

    let somemovies = filteredarr.slice(startind, endind);
    return (
      <><table class="table table-dark table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            somemovies.map((el) => {
              return (
                <tr key={el._id} class="table-delete-btn">
                  <td scope="col">{el.title}</td>
                  <td scope="col">{el.genre.name}</td>
                  <td scope="col">{el.numberInStock}</td>
                  <td scope="col">{el.dailyRentalRate}</td>
                  <td scope="col" onClick={(e) => { this.props.toggleLike(el._id) }}>
                    {el.liked ? (<i class="fas fa-heart"></i>) : <i class="far fa-heart"></i>}
                  </td>
                  <td scope="col"><button onClick={(e) => {
                    this.props.deleteMovie(el._id);
                  }} >button</button></td>
                </tr>

              );
            })
          }
        </tbody>
      </table>
        <Pagination selectPage={this.selectPage} currPage={this.state.currPage} totalpage={totalpage} />
      </>
    );
  }
};
export default Table;


