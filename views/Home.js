

setTimeout(() => {
  const jokeHomePunchline = document.querySelector(".joke-home-punchline");
  const jokeOfTheDay = document.querySelector(".title");

  const showPunchLine = (event) => {
    jokeHomePunchline.classList.add("show-punch-line");
    jokeOfTheDay.classList.remove("animation1");
  }

  jokeOfTheDay.addEventListener("click", showPunchLine);

}, 500);

class Home extends React.Component {

  randJoke = () => {
    const jokeHomePunchline = document.querySelector(".joke-home-punchline");
    jokeHomePunchline.classList.remove("show-punch-line");
    const jokeOfTheDay = document.querySelector(".title");
    setTimeout(() => {
      this.props.randCallback();

      const showPunchLine = (event) => {
        jokeHomePunchline.classList.add("show-punch-line");
        jokeOfTheDay.classList.remove("animation1");
      }

      jokeOfTheDay.addEventListener("click", showPunchLine);

    }, 500);

  }


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
        <h3 className="title  animation1">Random Joke!</h3>
        <p className="joke-home-setup">{this.props.state.randJoke.setup}</p>
        <p className="joke-home-punchline">-{this.props.state.randJoke.punchline}</p>
        <div className = "rand-joke" onClick = {this.randJoke}>GET RANDOM JOKE</div>
      </div>

    </div>
  }
}
