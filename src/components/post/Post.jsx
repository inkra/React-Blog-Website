import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/5430669/pexels-photo-5430669.jpeg?cs=srgb&dl=pexels-polina-kovaleva-5430669.jpg&fm=jpg" alt=""/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                    <span className="postTitle">Lorem ipsum dolor sit amet</span>
                    <hr/>
                    <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora soluta 
                excepturi corporis nobis illo minus, odio voluptates inventore quae sequi, 
                sint mollitia amet quo magni a atque iure ut cupiditate?</p>
        </div>
    )
}
