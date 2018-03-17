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

  componentDidMount(){
    this.handleGetVoice();
  }

  handleGetVoice = () => {
    let voices = synth.getVoices();
    this.setState({voices});
  }


  render () {
    console.log(this.state.voices);
    return (
      <div>
        <Main voices={this.state.voices}/>
        <div>test</div>
      </div>
    )
  }
}

export default Home;
