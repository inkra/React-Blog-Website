import "./login.css"

export default function Login() {
    return (
        <div className="login">
            
            <form className="loginForm">
            <h1 className="loginTitle">Welcome Back</h1>
            <p className="loginDesc">Enter your crendentials to access your account.</p>
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Enter your email"/>
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password"/>
                <button className="loginButton" >Login</button>
            </form>
            <a href="/register"><button className="loginRegisterButton">Register</button></a>
            <p className="loginPassword">Forgot your password? <a href="#">Reset Password</a></p>
        </div>
    )
}
