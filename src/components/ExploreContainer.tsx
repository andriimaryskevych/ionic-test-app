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

    // const tagPlayer = TagDecorator(player);
    // const clipPlayer = ClipCreateDecorator(tagPlayer, {
      // onClipCreateRequest: () => {}
    // });

    player.setTitle('Awesome event');
    player.setStreamNames(['a', 'b', 'c']);


    player.setSource('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
    player.play();
  }

  render () {
    return (
      <div className="aspect-ratio-box">
        <div className="aspect-ratio-box-inside">
            <div id="player"></div>
        </div>
    </div>
    );
  }
};

export default ExploreContainer;
