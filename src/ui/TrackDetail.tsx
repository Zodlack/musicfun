// import { useState, useEffect } from "react";
// import { getTrack } from "../dal/api";
// import type {TrackDetailsResource} from '../dal/api'
import { useTrackDetail } from "../bll/useTrackDetail";
import styles from './TrackDetail.module.css'



type TrackDetailProps = {
    trackId: string | null
}


export function TrackDetail({ trackId }: TrackDetailProps) {
    
    const {trackDetails} = useTrackDetail(trackId);

    return (
        <div className={styles.track}>
            <h2>Details</h2>
            {!trackDetails && !trackId && 'No details found'}
            {!trackDetails && trackId && 'Loading...'}
            {trackDetails && trackId && trackDetails.id !== trackId && 'Loading...'}
            {trackDetails &&
                <div>
                    <h3>{trackDetails.attributes.title}</h3>
                    <p>{trackDetails.attributes.lyrics ?? 'lyrics not found'}</p>
                </div>
            }
        </div>
    )
}