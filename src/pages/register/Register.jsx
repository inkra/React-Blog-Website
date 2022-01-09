import "./register.css"

export default function Register() {
    return (
        <div className="register">
            
            <form className="registerForm">
            <h1 className="registerTitle">Create New Account</h1>
            <p className="registerDesc">Already have an account? <a href="/login">Login</a></p>
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username"/>
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email"/>
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password"/>
                <button className="registerButton">Register</button>
            </form>
            <a href="/login"><button className="registerLoginButton">Login</button></a>
            

            
        </div>
    )
}
