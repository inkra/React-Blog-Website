import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting() {
    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingForm">
                    <label>Profil Picture</label>
                    <div className="settingPP">
                        <img src="https://images.pexels.com/photos/4348798/pexels-photo-4348798.jpeg?cs=srgb&dl=pexels-maksim-goncharenok-4348798.jpg&fm=jpg" alt=""/>
                        <label htmlFor="fileInput">
                        <i className="settingPPIcon fas fa-camera"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Inkra Andini"/>
                    <label>Email</label>
                    <input type="email" placeholder="inkra@gmail.com"/>
                    <label>Telephone</label>
                    <input type="text" placeholder="+6282429819072"/>
                    <label>Password</label>
                    <input type="password" placeholder="***" />
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
