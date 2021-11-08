

export const fetchVideos = () => (
    $.ajax({
        url: 'api/videos',
        method: 'GET'

    })
)