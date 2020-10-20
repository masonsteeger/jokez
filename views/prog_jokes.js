class ProgJokes extends React.Component {
  render = () => {
    let progJokes = this.props.state.jokes.filter(function (joke) {
      return joke.type === 'programming'
    })
    return (
      <div className="prog-container">
        {progJokes.map(
          (joke) => {
            return (
              <div className="joke-div" key={joke.id}>
                <h2>{joke.type}</h2>
                <h4>{joke.setup}</h4><br />
                <h5>{joke.punchline}</h5><br />
                <div><div className='vote-up' id={joke.id} joketype={joke.type} jokesetup={joke.setup} jokepunchline={joke.punchline} value={joke.vote} onClick={this.props.voteUp}></div> <div className='vote-down' id={joke.id} joketype={joke.type} jokesetup={joke.setup} jokepunchline={joke.punchline} value={joke.vote} onClick={this.props.voteDown}></div>{(joke.vote >= 0) ? <p className="green">{joke.vote}</p> : <p className="red">{joke.vote}</p>}</div>
              </div>
            )
          }
        )}
      </div>
    )
  }
}
