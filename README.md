# YaTube Video App

YaTube is a clone website which is based on the most popular video sharing website --- YouTube. This web app allows users to create accounts, to view the full page of videos, and to pick a specific video to watch.

[Check Out YaTube Live](https://yatube-video-app.herokuapp.com/#/videos)

## Technology

- React
- Redux
- Ruby
- Rails
- Postgresql
- AWS

## Libraries & Methodologies

- Ajax for sending and requesting data asynchronously
- BCrypt for storing salted and encrypted password hash

## Core Features 

- User Auth:
  - Users can sign up create their accounts, sign in, log out on the site.
  - Users can also use demo user mode logging in to try the site.
![](/app/assets/images/sign_up.png)

- Videos:  
  - Videos' index page displays a list of uploaded videos.
![](/app/assets/images/video_index.png)


  - Video' show page displays a specific video that user choose to watch.
![](/app/assets/images/video_show.png)

- Users can easily navigate to the videos' index page with the YaTube logo on top left as well as the home icon on the side bar. 

## Implimentation

- Realizing that i will have multiple elements to render for one element, I was able to manage and organize them in order to style them efficiently. 
```render(){
        const {video} = this.props;
        return (
            <div className="video-show-page">
                <div className="video-container">
                    <video className="singleVideo" src={video.vdUrl} controls></video>

                    <div className="video-title-section">

                            <div className="video-title-container">
                                    <div className="video-title">{video.title}</div>
                            </div>
                            <div className="video-view-count-container">
                                    <div className="video-view-count"> 32 views  •  Nov 8, 2021</div>
                                    <div className="video-likes-icons">

                                            <div className='inner-content'>
                                                <FiThumbsUp className='icon' /> 
                                                <div className='likes-num'> 16</div>
                                            </div>

                                            <div className='inner-content'>
                                                <FiThumbsDown className='icon'/>
                                                <div className='likes-num'> 2</div>
                                            </div>

                                            <div className='inner-content'>
                                                <RiShareForwardLine className='icon'/>
                                                <div className='likes-num'>SHARE</div>
                                            </div>

                                            <FiMoreHorizontal className='icon'/>                                    
                                    </div>
                            </div>
                    </div>

                    <div className='video-description-section'>
                        <img className='user-profile-img' src={window.userProfile2URL}/>

                        <div className='content'>
                            <div className="description-container">
                                <div className='creator'>
                                    <div className='creator-name'>YaTube User</div>
                                </div>
                                <div className='red-button'>
                                <button className='subscribe-button'>SUBSCRIBE</button>
                                </div>
                            </div>
                            <div className='description-content'>
                                <div className='video-description'>{video.description}</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
```
    
## Future Features

- Like and dislike a video
- Comment on videos
- Subscribe a creator
- Upload and delete a video

## Credit
- Meyer Web Css Reset: https://meyerweb.com/eric/tools/css/reset/
- Festi Site: https://www.festisite.com/
