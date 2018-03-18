import React from 'react';
import Main from '../components/Main';
const synth = window.speechSynthesis;

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      voices: []
    }
  }

  handleGetVoice = () => {
    let voices = synth.getVoices();
    console.log(voices);
    this.setState({voices});
    console.log("handle")
  }

  render () {

    return (
      <div>
        <Main voices={this.state.voices} handleGetVoice={this.handleGetVoice}/>
        <div>test</div>
      </div>
    )
  }
}

export default Home;
