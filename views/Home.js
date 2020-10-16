

class App extends React.Component {
    // Component

    render = () => {
        return <div>

            <h1>JOKES APP (HOMEPAGE)</h1>
            <div className="joke-of-the-day">
                <h3 className="title">Joke Of The Day</h3>
                <p className="joke-home-setup">the setup for the joke here</p>
                <p className="joke-home-punchline">the punchline here</p>
            </div>
        </div>
    }
}


ReactDOM.render(
    <App />,
    document.querySelector(".section1")
)