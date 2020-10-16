



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
                  {joke.type}
                  {joke.setup}
                  {joke.punchline}
                </div>
              )
            }
          )}
      </div>
    )
  }
}
