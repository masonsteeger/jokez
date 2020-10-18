



class Section2 extends React.Component {

  checkVote = (id, newValue) => {
    if(newValue < -10){
      this.props.deleteJoke(id);
    }
  }

  componentDidMount = () => {
    this.props.jokeCallback();
  }

  voteUp = (event) => {
    this.props.voteUp(event);
  }

  voteDown = (event) => {
    this.props.voteDown(event);
    const id = event.target.getAttribute('id');
    const newValue = parseInt(event.target.getAttribute('value'))-1
    this.checkVote(id, newValue);
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
                  <h2>{joke.type}</h2>
                  <h4>{joke.setup}</h4><br/>
                  <h4>{joke.punchline}</h4><br/>
                  <p><div className='vote-up' id={joke.id} joketype={joke.type} jokesetup={joke.setup} jokepunchline={joke.punchline} value={joke.vote} onClick={this.voteUp}></div> {joke.vote} <div className='vote-down' id = {joke.id} joketype={joke.type} jokesetup={joke.setup} jokepunchline={joke.punchline} value={joke.vote} onClick={this.voteDown}></div></p>
                </div>
              )
            }
          )}
        </div>
      </div>
    )
  }
}
