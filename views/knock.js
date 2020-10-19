class KnockJokes extends React.Component{
  render = () => {
    let knockJokes = this.props.state.jokes.filter(function (joke){
    return joke.type === "knock-knock"
  })
  return(
    <div className="knock-container">
      {knockJokes.map(
        (joke) => {
          return (
            <div className="joke-div" key={joke.id}>
              <h2>{joke.type}</h2>
              <h4>{joke.setup}</h4><br/>
              <h4>{joke.punchline}</h4><br/>
              <p><div className='vote-up' id={joke.id} joketype={joke.type} jokesetup={joke.setup} jokepunchline={joke.punchline} value={joke.vote} onClick={this.props.voteUp}></div> {joke.vote} <div className='vote-down' id = {joke.id} joketype={joke.type} jokesetup={joke.setup} jokepunchline={joke.punchline} value={joke.vote} onClick={this.props.voteDown}></div></p>
            </div>
          )
        }
      )}
    </div>
  )
  }
}
