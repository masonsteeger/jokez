class Form extends React.Component {



  createJoke = (event) => {
    event.preventDefault();
    event.target.reset();
    axios.post(
      '/jokes',
      {
        type: this.state.newType,
        setup: this.state.newSetup,
        punchline: this.state.newPunchline,
      }
    ).then(
      this.props.jokeCallback()
    )
  }
  changeType = (event) => {
    this.setState({
      newType: event.target.value
    })
  }
  changeSetup = (event) => {
    this.setState({
      newSetup: event.target.value
    })
  }
  changePunchline = (event) => {
    this.setState({
      newPunchline: event.target.value
    })
  }
  render = () => {
    return (
      <div className="form">
        <h2>Submit a Joke!</h2>
        <form onSubmit={this.createJoke}>
          <label>Joke Type</label><br />
          <input type="text" onKeyUp={this.changeType} /><br />
          <label>Joke Setup</label><br />
          <input type="text" onKeyUp={this.changeSetup} /><br />
          <label>Joke Punchline</label><br />
          <input type="text" onKeyUp={this.changePunchline} /><br />
          <input type="submit" value="SUBMIT JOKE" />
        </form>
      </div>
    )
  }
}