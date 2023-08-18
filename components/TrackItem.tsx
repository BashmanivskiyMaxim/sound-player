import { ITrack } from "@/app/types/tracks";
import React from 'react';
import style from './TrackItem.module.scss'
import { Card, Grid } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface TrackItemProps {
    track: ITrack
    active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
    const router = useRouter()
    return (
        <Card onClick={() => router.push('/tracks/' + track._id)} className={style.track}>
            <IconButton onClick={e => e.stopPropagation()}>
                {!active ? <PlayArrow /> : <Pause />}
            </IconButton>
            <div style={{ width: "70px", height: "70px", color: "green" }}></div>
            <Grid className={style.grid_track_info} container direction='column'>
                <div className={style.track_name}>{track.name}</div>
                <div className={style.artist}>{track.artist}</div>
            </Grid>
            {active && <div>2:43 / 4:55</div>}
            <IconButton onClick={e => e.stopPropagation()} className={style.delete}>
                <Delete />
            </IconButton>
        </Card>
    );
};
//<Image alt="track" width={70} height={70} src={track.picture} />
export default TrackItem;