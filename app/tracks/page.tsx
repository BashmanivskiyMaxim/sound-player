"use client"
import Navbar from "@/components/Navbar";
import React from 'react';
import styles from './page.module.css'
import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { ITrack } from "../types/tracks";
import TrackList from "@/components/TrackList";

const Page = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {
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
        },
        {
            _id: "2",
            name: "Song 2",
            artist: "Artist 2",
            text: "Lyrics for Song 2",
            listens: 200,
            picture: "image2.jpg",
            comment: [
                {
                    _id: "3",
                    username: "User3",
                    text: "Comment 1 for Song 2",
                },
                {
                    _id: "4",
                    username: "User4",
                    text: "Comment 2 for Song 2",
                },
            ],
        },
        {
            _id: "3",
            name: "Song 3",
            artist: "Artist 3",
            text: "Lyrics for Song 3",
            listens: 150,
            picture: "image3.jpg",
            comment: [
                {
                    _id: "5",
                    username: "User5",
                    text: "Comment 1 for Song 3",
                },
                {
                    _id: "6",
                    username: "User6",
                    text: "Comment 2 for Song 3",
                },
            ],
        },
        {
            _id: "4",
            name: "Song 4",
            artist: "Artist 4",
            text: "Lyrics for Song 4",
            listens: 250,
            picture: "image4.jpg",
            comment: [
                {
                    _id: "7",
                    username: "User7",
                    text: "Comment 1 for Song 4",
                },
                {
                    _id: "8",
                    username: "User8",
                    text: "Comment 2 for Song 4",
                },
            ],
        },
        {
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
    ]
    return (
        <>
            <Navbar />
            <Grid container justifyContent='center'>
                <Card style={{ width: "800px" }}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>List of Music</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Upload</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </>
    );
};

export default Page;