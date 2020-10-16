

class Home extends React.Component {



  componentDidMount = () => {
    this.props.randCallback();
  }

    render = () => {
        return <div className="homepage">

            <h1>JOKES APP (HOMEPAGE)</h1>
            <div className="joke-of-the-day">
                <h3 className="title">Joke Of The Day</h3>
               <p className="joke-home-setup">{this.props.state.randJoke.setup}</p>
               <p className="joke-home-punchline">{this.props.state.randJoke.punchline}</p>
            </div>

        </div>
    }
}
