import { useState,useEffect } from "react";
import { getTrack } from "../dal/api";
import type {TrackDetailsResource} from '../dal/api'


export function useTrackDetail(trackId: string | null){
    let [trackDetails, setTrackDetails] = useState<TrackDetailsResource | null>(null);

    useEffect(() => {

        if (!trackId) {
            setTrackDetails(null);
            return;
        }

        const promise = getTrack(trackId);
        promise.then(tracks => setTrackDetails(tracks.data))
    }, [trackId])

    return {
      trackDetails
    }
}