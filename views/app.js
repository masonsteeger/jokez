////
class App extends React.Component {

    render = () => {
        return <div clasName="main-body">
            <Home />
            <Section2 />
            <Form />

        </div>
    }
}


ReactDOM.render(
    <App />,
    document.querySelector("main")
)