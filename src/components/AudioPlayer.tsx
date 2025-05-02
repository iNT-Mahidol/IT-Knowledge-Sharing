import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface AudioPlayerProps {
  src: string;
}

const CustomAudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
    console.log("AudioPlayer src:", src); // Log the src prop to check its value
  return <AudioPlayer src={src} />;
};
export default CustomAudioPlayer;