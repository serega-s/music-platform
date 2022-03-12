import { Pause, PlayArrow } from "@mui/icons-material"
import { Grid, IconButton } from "@mui/material"
import React from "react"
import styles from "../styles/Player.module.scss"
import TrackProgress from "./TrackProgress"

const Player = () => {
  const active = false
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
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})} />
    </div>
  )
}

export default Player
