import "./header.css"

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">This is where we tell stories</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/662994/pexels-photo-662994.jpeg?cs=srgb&dl=pexels-melanie-wupperman-662994.jpg&fm=jpg" alt=""/>
        </div>
    )
}
