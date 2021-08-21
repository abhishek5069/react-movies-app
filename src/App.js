import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";
import Pagination from "./Pagination";
import Login from "./Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customer from "./Customer";
import Rentals from "./Rentals"; 

class App extends React.Component {

  state = {
    movies: [],
    genre: [],
    selectedFilter: "All Genre",
    search: "",
  };

  updateSearch = (searchString) => {
    this.setState({ search: searchString });
  }

  setFilter = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  toggleLike = (id) => {
    let index = this.state.movies.findIndex((el) => {
      return el._id == id;
    });
    let copymoviearray = this.state.movies.map((el) => el);
    if (copymoviearray[index].liked) {
      copymoviearray[index].liked = false;
    } else copymoviearray[index].liked = true;

    this.setState({ movies: copymoviearray });
  };

  deleteMovie = (id) => {
    let movarr = this.state.movies.filter((el) => {
      return el._id != id;
    })
    this.setState({ movies: movarr });
  };

  componentDidMount() {
    let f = async () => {
      let resmov = await fetch("/movies");
      let resgen = await fetch("/genre");
      let movjson = await resmov.json();
      let genjson = await resgen.json();
      this.setState({
        movies: movjson,
        genre: genjson,
      });

    };
    f();

  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route path="/login"><Login /></Route>
            <Route path="/rentals"><Rentals/></Route>
            <Route path="/customer"><Customer/></Route>
            <Route path="/">
            <div class="row">
            <Filter handleFilter={this.setFilter} selectedFilter={this.state.selectedFilter} gendata={this.state.genre} />
            <div class="col-8 mt-3">
              <Search search={this.state.search} updateSearch={this.updateSearch} total={this.state.movies.length} />
              <Table search={this.state.search} deleteMovie={this.deleteMovie} toggleLike={this.toggleLike} selectedFilter={this.state.selectedFilter} movieData={this.state.movies} />
            </div>

          </div>
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;