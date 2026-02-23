import Container from 'react-bootstrap/Container';

const Login = () => {
    return (
        <Container className="mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            {/* Add login form here */}
                            <h1 className='text-center'>Login</h1>
                            <form action="">
                                <div className="form-group mb-2">
                                    <label htmlFor="username" className='mb-2'>Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="Enter username"/>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="password" className='mb-2'>Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter password"/>
                                </div>
                                <button className="btn btn-primary w-100 text-center d-flex justify-content-center align-items-center">Login</button>
                                <a href="/register" className="text-center d-block mt-2" id='register-link'>Don't have an account? Register</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    );
};

const registerLink = document.getElementById('register-link');
registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/register';
});

export default Login;