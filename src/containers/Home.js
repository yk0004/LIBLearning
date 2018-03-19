import React from 'react';
import Main from '../components/Main';
import { VoicePlayer, VoiceRecognition } from 'react-voice-components';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      voices: "Hello Miae, I love you"
    }
  }

  render () {

    return (
      <div>
        <VoicePlayer
   play
   text="React voice player demonstration"
 />
      </div>
    )
  }
}

export default Home;
