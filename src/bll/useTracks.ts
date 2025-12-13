import { useState, useEffect } from 'react'
import type {TrackListItemResource} from "../dal/api"
import { getTracks } from "../dal/api";





export const useTracks = () => {
    let [tracks, setTraks] = useState<Array<TrackListItemResource> | null>(null);

    useEffect(() => {
        getTracks().then(tracks => setTraks(tracks.data))
    }, [])


    // const refrech = () => {
    //     setTraks(null);
    //     getTracks().then(tracks => setTraks(tracks.data));
    // }

    return {
        tracks
    }


}

