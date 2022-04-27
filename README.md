## YaTube Video App

---

YaTube is a clone website which is based on the most popular video sharing website --- YouTube. This web app allows users to create accounts, to view the full page of videos, and to pick a specific video to watch.

[Check Out YaTube Live](https://yatube-video-app.herokuapp.com/#/videos)

![intro_page](https://user-images.githubusercontent.com/75951481/165430453-5d2d7b7b-c63c-4298-a850-4f09457f3ab4.gif)

<!-- <img width="1226" alt="yatube_homepage" src="https://user-images.githubusercontent.com/75951481/165418678-477b19f4-d89f-4e28-bd13-3b3d0d5538d9.png"> -->


## Technology

---

- React
- Redux
- Ruby
- Rails
- JavaScript
- Postgresql
- AWS

## Libraries & Methodologies

- Ajax for sending and requesting data asynchronously
- BCrypt for storing salted and encrypted password hash

## Core Features 

---

- User Auth:
  - Users can sign up create their accounts, sign in, log out on the site.
  - Users can also use demo user mode logging in to try the site.
 ![](https://yatube-seeds.s3.amazonaws.com/login.gif)
<!--   <img width="1280" alt="user_auth" src="https://user-images.githubusercontent.com/75951481/165427962-8f144988-8923-425f-b7c7-fcaa55754f23.png”> -->

- Videos:  
  - Videos' index page displays a list of uploaded videos.
  - Video' show page displays a specific video that user choose to watch.
<!-- ![](/app/assets/images/video_showpage.png) -->
![video_showpage](https://user-images.githubusercontent.com/75951481/165426005-a3955d08-b2c0-418a-815d-ffc77ab64020.gif)

- Comments:
  - Logged in users can leave comments, edit, and delete comments on their favorite videos.
<!--   ![](/app/assets/images/comment.png) -->
  ![comment](https://user-images.githubusercontent.com/75951481/165425988-2475e425-1c2d-4e09-87db-0a72bac362ad.gif)
  
- Search:
  - Users can use the search bar to search for videos.
<!--   ![](/app/assets/images/searchbar.png)  -->
  ![search_bar](https://user-images.githubusercontent.com/75951481/165425994-9750964e-c899-46b2-af72-3f35efd4045a.gif)

- Navigation:
  - Users can easily navigate to the videos' index page with the YaTube logo on top left as well as the home icon on the side bar. 
<!--   - ![](/app/assets/images/sidebar.png) -->
  ![sidebar](https://user-images.githubusercontent.com/75951481/165425998-861537a8-6d37-4068-b5e0-700a18500fa2.gif)

## Implimentation

- Realizing that i will have multiple elements to render for one component, I was able to manage and organize multitple elements in order to style them efficiently. 
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
