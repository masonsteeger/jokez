class App extends React.Component {
  state = {
    jokes: []
  }
  getJokes = () => {
    axios.get('/people').then(
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
          <button>Home</button>
          <button>Add a new joke</button>
          <button>See All Jokes</button>
        </nav>
        <div className="homepage">
          <Home />
        </div>
        <div className="section2">
          <Section2 />
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.querySelector("main")
)