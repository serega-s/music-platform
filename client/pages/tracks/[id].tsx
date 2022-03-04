import { Button, Grid, TextField } from "@mui/material"
import { useRouter } from "next/router"
import React from "react"
import MainLayout from "../../layouts/MainLayout"
import { ITrack } from "../../types/track"

const TrackPage = () => {
  const router = useRouter()

  const track: ITrack = {
    _id: "1",
    artist: "Death",
    comments: [],
    listens: 100,
    name: "Spirit Crusher",
    picture: "https://i.ytimg.com/vi/4_rYk_aJbcQ/maxresdefault.jpg",
    text: "text",
  }

  return (
    <MainLayout>
      <Button
        variant="outlined"
        style={{ fontSize: 22 }}
        onClick={() => router.push("/tracks")}
      >
        Back to tracks
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img src={track.picture} width={200} height={200} />
        <div>
          <h1>Name: {track.name}</h1>
          <h1>Artist: {track.artist}</h1>
          <h1>Listened: {track.listens}</h1>
        </div>
      </Grid>
      <h1>Words of track</h1>
      <p>{track.text}</p>
      <h1>Comments</h1>
      <Grid container>
        <TextField label="Your name" fullWidth />
        <TextField label="Comment" fullWidth multiline rows={4} />
        <Button>Submit</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div>
            <div>Author - {comment.username}</div>
            <div>Comment - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}

export default TrackPage
