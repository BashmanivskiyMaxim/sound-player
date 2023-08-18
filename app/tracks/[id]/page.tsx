"use client"
import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { ITrack } from "@/app/types/tracks";
import styles from './page.module.css';

const Page = () => {
    const track: ITrack = {
        _id: "5",
        name: "Song 5",
        artist: "Artist 5",
        text: "Lyrics for Song 5",
        listens: 300,
        picture: "image5.jpg",
        comment: [
            {
                _id: "9",
                username: "User9",
                text: "Comment 1 for Song 5",
            },
            {
                _id: "10",
                username: "User10",
                text: "Comment 2 for Song 5",
            },
        ],
    }

    const router = useRouter()

    return (
        <>
            <Navbar />
            <Button onClick={() => router.push('/tracks')}>List of tracks</Button>
            <Grid container className={styles.container}>
                <img alt="" src={track.picture} className={styles.picture} />
                <div className={styles.trackInfo}>
                    <h1 className={styles.trackName}>{track.name}</h1>
                    <h2 className={styles.trackArtist}>by {track.artist}</h2>
                    <p className={styles.trackListens}>{track.listens} listens</p>
                </div>
            </Grid>
            <h1 className={styles.lyricsContainer}>Lyrics</h1>
            <p>{track.text}</p>
            <div className={styles.commentSection}>
                <h1>Comments</h1>
                <TextField label="Your name" fullWidth className={styles.commentInput} />
                <TextField label="Comment" fullWidth multiline rows={4} className={styles.commentInput} />
                <Button className={styles.commentButton}>Add Comment</Button>
            </div>
            <div>
                {track.comment.map(comment => <div key={comment._id}>
                    <div>{comment.username}</div>
                    <div>{comment.text}</div>
                </div>)}
            </div>
        </>
    );
};

export default Page;
