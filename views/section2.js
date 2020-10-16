



class Section2 extends React.Component {

  componentDidMount = () => {
    this.props.jokeCallback();
  }


  render = () => {
      return (
      <div className="section2">
        <h2>Jokes List</h2>
          {this.props.state.jokes.map(
            (joke) => {
              return(
                <div className="joke-div">
                  <h3>{joke.type}</h3>
                  <p>{joke.setup}</p>
                  <p>{joke.punchline}</p>
                </div>
              )
            }
          )}
      </div>
    )
  }
}
