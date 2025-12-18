import clsx from "clsx"
import type { TrackListItemResource } from "../dal/api"
import styles from './TrackList.module.css'


type TrackitemProps = {
    track: TrackListItemResource,
    isSelected: boolean,
    onSelect: (trackId: string) => void

}



export function Trackitem({ track, isSelected, onSelect }: TrackitemProps) {

    const handleClick = () => onSelect?.(track.id)


    const className = clsx({
        [styles.track]: true,
        [styles.selected]: isSelected,
    }
    )


    return (
        <li key={track.id} className={className}>
            <div className={styles.title} onClick={handleClick}>
                {track.attributes.title}
            </div>

            <audio src={track.attributes.attachments[0].url} controls ></audio>
        </li>
    )
}