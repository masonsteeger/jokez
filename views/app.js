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
          <button>Home</button>
          <button>Add a new joke</button>
          <button>See All Jokes</button>
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
