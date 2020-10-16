
setTimeout(() => {
  const homeButton = document.querySelector(".home-button");
  const newJokeButton = document.querySelector(".new-joke-button");
  const allJokesButton = document.querySelector(".all-jokes-button");
  const homePage = document.querySelector(".homepage");
  const allJokesPage = document.querySelector(".section2");
  const newJokePage = document.querySelector(".form");

  const togglePages = (event) => {
    // if(event.target.className)
    const className = event.target.className;
    console.log(className);
    if (className === "home-button") {
      homePage.style.display = "block";
      newJokePage.style.display = "none";
      allJokesPage.style.display = "none";
    }
    if (className === "new-joke-button") {
      newJokePage.style.display = "block";
      homePage.style.display = "none";
      allJokesPage.style.display = "none";
    }
    if (className === "all-jokes-button") {
      allJokesPage.style.display = "block";
      newJokePage.style.display = "none";
      homePage.style.display = "none";
    }

  }
  homeButton.addEventListener("click", togglePages)
  allJokesButton.addEventListener("click", togglePages)
  newJokeButton.addEventListener("click", togglePages)

}, 1000);



class App extends React.Component {
  state = {
    jokes: [],
    randJoke: []
  }

  componentDidMount = () => {
    this.getJokes();
  }

  getJokes = () => {
    axios.get('/jokes').then(
      (response) => {
        // console.log(response.data);
        this.setState(
          {
            jokes: response.data
          }
        )
      }
    )
  }

  getRandomJoke = () => {
    axios.get('/random').then(
      (response) => {
        console.log(response.data);
        this.setState(
          {
            randJoke: response.data
          }
        )
      }
    )
  }



  render = () => {
    return (
      <div className="main-body">
        <nav>
          <button className="home-button">Home</button>
          <button className="new-joke-button">Add a new joke</button>
          <button className="all-jokes-button">See All Jokes</button>
        </nav>
        <Home state={this.state} randCallback={this.getRandomJoke}/>
        <Section2 alljokes={this.state.jokes} jokeCallback={this.getJokes} />
        <Form state={this.state.jokes} jokeCallback={this.getJokes} />

      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.querySelector("main")
)
