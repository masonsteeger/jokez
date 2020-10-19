


class Section2 extends React.Component {

  filter = (event) => {
    const allJokes = document.querySelector(".all-container");
    const progJokes = document.querySelector(".prog-container");
    const recentJokes = document.querySelector(".recent-container");
    const genJokes = document.querySelector(".gen-container");
    const knockJokes = document.querySelector(".knock-container");
    const className = event.target.className
    if(className === 'all-filter'){
      allJokes.style.display = "flex";
      progJokes.style.display = "none";
      genJokes.style.display = "none";
      recentJokes.style.display = "none"
      knockJokes.style.display = "none"
    }
    if(className === 'prog-filter'){
      allJokes.style.display = "none";
      progJokes.style.display = "flex";
      genJokes.style.display = "none";
      recentJokes.style.display = "none"
      knockJokes.style.display = "none"
    }
    if(className === 'gen-filter'){
      allJokes.style.display = "none";
      progJokes.style.display = "none";
      genJokes.style.display = "flex";
      recentJokes.style.display = "none"
      knockJokes.style.display = "none"
    }
    if(className === 'recent-filter'){
      allJokes.style.display = "none";
      progJokes.style.display = "none";
      genJokes.style.display = "none";
      recentJokes.style.display = "flex"
      knockJokes.style.display = "none"
    }
    if(className === 'knock-filter'){
      allJokes.style.display = "none";
      progJokes.style.display = "none";
      genJokes.style.display = "none";
      recentJokes.style.display = "none"
      knockJokes.style.display = "flex"
    }
  }

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
          <li className = 'all-filter' onClick = {this.filter}>ALL</li>
          <li className = 'gen-filter' onClick = {this.filter}>GENERAL</li>
          <li className = 'prog-filter' onClick = {this.filter}>PROGRAMMING</li>
          <li className = 'knock-filter' onClick = {this.filter}>KNOCK-KNOCK</li>
          <li className = 'recent-filter' onClick = {this.filter}>MOST RECENT</li>
        </ul>
        <All state = {this.props.state} voteUp={this.voteUp} voteDown={this.voteDown} />
        <GenJokes state = {this.props.state} voteUp={this.voteUp} voteDown={this.voteDown} />
        <ProgJokes state = {this.props.state} voteUp={this.voteUp} voteDown={this.voteDown} />
        <KnockJokes state = {this.props.state} voteUp={this.voteUp} voteDown={this.voteDown} />
        <Recent state = {this.props.state} voteUp={this.voteUp} voteDown={this.voteDown} />

      </div>
    )
  }
}
