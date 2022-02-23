import { Card, Grid, IconButton } from "@mui/material"
import { PlayArrow, Pause, Delete } from "@mui/icons-material"
import styles from "../styles/TrackItem.module.scss"
import React from "react"
import { ITrack } from "../types/track"

interface TrackItemProps {
  track: ITrack
  active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = true }) => {
  return (
    <Card className={styles.track}>
      <IconButton>{active ? <Pause /> : <PlayArrow />}</IconButton>
      <img width={70} height={70} src={track.picture} alt="image" />
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:52</div>}
      <IconButton>
        <Delete />
      </IconButton>
    </Card>
  )
}

export default TrackItem
