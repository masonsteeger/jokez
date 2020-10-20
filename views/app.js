
setTimeout(() => {
  const homeButton = document.querySelector(".home-button");
  const newJokeButton = document.querySelector(".new-joke-button");
  const allJokesButton = document.querySelector(".all-jokes-button");
  const shadowButton = document.querySelector(".button-shadow");
  const homePage = document.querySelector(".homepage");
  const allJokesPage = document.querySelector(".section2");
  const newJokePage = document.querySelector(".form");

  const togglePages = (event) => {
    // if(event.target.className)
    const className = event.target.className;
    console.log(className);
    if (className === "home-button") {
      homePage.style.display = "grid";
      newJokePage.style.display = "none";
      allJokesPage.style.display = "none";
      shadowButton.classList.remove("shadow-transition-one");
      shadowButton.classList.remove("shadow-transition-two");
    }
    if (className === "new-joke-button") {
      newJokePage.style.display = "grid";
      homePage.style.display = "none";
      allJokesPage.style.display = "none";
      shadowButton.classList.remove("shadow-transition-two");
      shadowButton.classList.add("shadow-transition-one");
    }
    if (className === "all-jokes-button") {
      allJokesPage.style.display = "block";
      newJokePage.style.display = "none";
      homePage.style.display = "none";
      shadowButton.classList.remove("shadow-transition-one");
      shadowButton.classList.add("shadow-transition-two");
    }

  }
  homeButton.addEventListener("click", togglePages)
  allJokesButton.addEventListener("click", togglePages)
  newJokeButton.addEventListener("click", togglePages)

}, 500);



class App extends React.Component {
  state = {
    jokes: [],
    randJoke: [],
    progJoke:[],
    genJoke: []
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

  deleteJoke = (id) => {
    axios.delete('/jokes/'+id).then(
      (response) => {
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



  voteUp = (event) => {
    const id = event.target.getAttribute('id');
    const type = event.target.getAttribute('joketype')
    const setup = event.target.getAttribute('jokesetup')
    const punchline = event.target.getAttribute('jokepunchline')
    const newValue = parseInt(event.target.getAttribute('value'))+1
    axios.put(
      '/vote/'+id,
      {
        type: type,
        setup: setup,
        punchline: punchline,
        vote: newValue
      }
    ).then(
      (response) => {
        this.setState(
          {
          jokes: response.data
          }
        )
      }
    )
  }

  voteDown = (event) => {
    const id = event.target.getAttribute('id');
    const type = event.target.getAttribute('joketype')
    const setup = event.target.getAttribute('jokesetup')
    const punchline = event.target.getAttribute('jokepunchline')
    const newValue = parseInt(event.target.getAttribute('value'))-1
    axios.put(
      '/vote/'+id,
      {
        type: type,
        setup: setup,
        punchline: punchline,
        vote: newValue
      }
    ).then(
      (response) => {
        this.setState(
          {
          jokes: response.data
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
          <button className="all-jokes-button">Library</button>
          <button className="new-joke-button">got a joke?</button>
          <div className="button-shadow"></div>
        </nav>
        <Home state={this.state} randCallback={this.getRandomJoke} />
        <Section2 state={this.state} jokeCallback={this.getJokes} voteUp={this.voteUp} voteDown={this.voteDown} deleteJoke = {this.deleteJoke}/>
        <Form state={this.state.jokes} jokeCallback={this.getJokes} />

      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.querySelector("main")
)
