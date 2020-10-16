
class App extends React.Component {

    render = () => {
        return(
        <div className="main-body">
          <div className="homepage">
            <Home />
          </div>
          <div className="section2">
            <Section2 />
          </div>
          <div className="form">
            <Form />
          </div>
        </div>
      )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector("main")
)
