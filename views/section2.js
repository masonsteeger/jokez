



class Section2 extends React.Component {

  componentDidMount = () => {
    // this.props.jokeCallback();
  }


  render = () => {
    return (
      <div className="section2">
        <h2 className="section-title">Jokes List</h2>
        <ul className="list-category">
          <li>ALL</li>
          <li>GENERAL</li>
          <li>PROGRAMMING</li>
          <li>MOST RECENT</li>
        </ul>
        <div className="jokes-container">
          {this.props.alljokes.map(
            (joke) => {
              return (
                <div className="joke-div" key={joke.id}>
                  <h3>{joke.type}</h3>
                  <p>{joke.setup}</p>
                  <p>{joke.punchline}</p>
                </div>
              )
            }
          )}
        </div>
      </div>
    )
  }
}
