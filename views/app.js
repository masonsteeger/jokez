
class App extends React.Component {
  state = {
    jokes:[]
  }

  getJokes = () => {
    axios.get('/jokes').then(
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
        return(
        <div className="main-body">
            <Home state={this.state} />
            <Section2 state={this.state} jokeCallback={this.getJokes}/>
            <Form state={this.state} jokeCallback={this.getJokes}/>
        </div>
      )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector("main")
)
