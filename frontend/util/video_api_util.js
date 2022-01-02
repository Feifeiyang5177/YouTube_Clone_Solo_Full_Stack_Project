

export const fetchVideos = () => (
    $.ajax({
        url: 'api/videos',
        method: 'GET'

    })
)

export const fetchVideo = (videoId) => {
   
    return $.ajax({
        url: `api/videos/${videoId}`,
        method: 'GET'
    })
}

export const addViews = (videoId) => {
  return $.ajax({
    method: "POST",
    url: `/api/videos/${videoId}/add_views`,
  });
};