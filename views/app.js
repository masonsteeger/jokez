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