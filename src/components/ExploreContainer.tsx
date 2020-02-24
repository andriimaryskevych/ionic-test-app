import React from 'react';
import './ExploreContainer.css';

class ExploreContainer extends React.Component {
  componentDidMount () {
    // @ts-ignore
    const PixellotWebSDK = window['pixellot-web-sdk'];
    const {
        TagDecorator,
        ClipCreateDecorator,
    } = PixellotWebSDK.Decorators;

    const playerContainer = document.getElementById('player');
    const player = PixellotWebSDK.Player(document.getElementById('player'));

    // player.setTitle('Awesome event');
    // player.setStreamNames(['a', 'b', 'c']);
    // player.setActiveStreamName('a');
    // player.setSwitchSelectCallback((active: String) => clipPlayer.setActiveStreamName(active));

    const clipPlayer = ClipCreateDecorator(player, {
      onClipCreateRequest: () => {}
    });

    clipPlayer.setSource('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
    clipPlayer.play();
  }

  render () {
    return (
      <div className="player-container">
        <div className="aspect-ratio-box">
          <div className="aspect-ratio-box-inside">
            <div id="player"></div>
          </div>
        </div>
      </div>
    );
  }
};

export default ExploreContainer;
