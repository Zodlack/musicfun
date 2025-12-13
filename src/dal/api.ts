
type TrackDetailsAttributes = {
    title: string,
    lyrics: string | null
}

export type TrackDetailsResource = {
    id: string,
    attributes: TrackDetailsAttributes
}



export const getTrack = (trackId: string) => {
    const promise: Promise<{ data: TrackDetailsResource }> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: {
            'api-key': '13d8b1e3-969a-4b30-bcee-006080e7160f',
        },
    }).then(response => response.json())

    return promise;
}



type TrackAttachment = {
    url: string
}



export type TrackListItemResource = {
    id: string,
    attributes: {
        title: string,
        attachments: Array<TrackAttachment>
    }
}




export const getTracks = () => {
    const promise: Promise<{ data:Array<TrackListItemResource> }> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            'api-key': '13d8b1e3-969a-4b30-bcee-006080e7160f',
        },
    })
        .then(response => response.json())

    return  promise
}