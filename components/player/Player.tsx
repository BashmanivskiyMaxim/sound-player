"use client"

import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import React from 'react';
import style from './Player.module.css'
import { ITrack } from '@/app/types/tracks';
import styleItem from '../tracks/TrackItem.module.scss'
import TrackProgress from './TrackProgress';

const Player: React.FC = () => {

    const track: ITrack = {
        _id: "1",
        name: "Song 1",
        artist: "Artist 1",
        text: "Lyrics for Song 1",
        listens: 100,
        picture: "image1.jpg",
        comment: [
            {
                _id: "1",
                username: "User1",
                text: "Comment 1 for Song 1",
            },
            {
                _id: "2",
                username: "User2",
                text: "Comment 2 for Song 1",
            },
        ],
    }

    const active = false
    return (
        <div className={style.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {!active ? <PlayArrow /> : <Pause />}
            </IconButton>
            <Grid className={styleItem.grid_track_info} container direction='column'>
                <div className={styleItem.track_name}>{track.name}</div>
                <div className={styleItem.artist}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={0} onChange={() => {}}/>
            <VolumeUp className={style.volume_svg}/>
            <TrackProgress left={0} right={0} onChange={() => {}}/>
        </div>
    );
};

export default Player;