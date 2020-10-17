

setTimeout(() => {
  const jokeHomePunchline = document.querySelector(".joke-home-punchline");
  const question = document.querySelector(".joke-home-setup");

  const showPunchLine = (event) => {
    jokeHomePunchline.classList.add("show-punch-line");
  }

  question.addEventListener("click", showPunchLine);

}, 500);

class Home extends React.Component {



  componentDidMount = () => {
    this.props.randCallback();
  }

  render = () => {
    return <div className="homepage">
      <div className="title-container">
        <h1>JOKEZ APP</h1>
        <p>A Collaboration Between Mason & Johnny</p>

      </div>
      <div className="joke-of-the-day">
        <h3 className="title">Joke Of The Day!</h3>
        <p className="joke-home-setup">{this.props.state.randJoke.setup}</p>
        <p className="joke-home-punchline">-{this.props.state.randJoke.punchline}</p>
      </div>

    </div>
  }
}
