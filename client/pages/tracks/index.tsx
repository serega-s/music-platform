import { Button, Card, Grid, Box } from "@mui/material"
// import { Box } from "@mui/system"
import { useRouter } from "next/router"
import React from "react"
import TrackList from "../../components/TrackList"
import MainLayout from "../../layouts/MainLayout"
import { ITrack } from "../../types/track"

const Index = () => {
  const router = useRouter()
  const tracks: ITrack[] = [
    {
      _id: "1",
      artist: "Death",
      comments: [],
      listens: 100,
      name: "Spirit Crusher",
      picture: "https://i.ytimg.com/vi/4_rYk_aJbcQ/maxresdefault.jpg",
      text: "text",
    },
    {
      _id: "2",
      artist: "artist",
      comments: [],
      listens: 100,
      name: "Name",
      picture: "Picture",
      text: "text",
    },
  ]

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Tracks</h1>
              <Button onClick={() => router.push("/tracks/create")}>
                Upload
              </Button>
            </Grid>
          </Box>

          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Index
