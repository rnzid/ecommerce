import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="login-form bg-light mt-4 p-4">
                    <form action="" method="" class="row g-3">
                        <h4>Login Page</h4>
                        <div class="col-12">
                            <label>Email</label>
                            <input type="text" name="Email" class="form-control" placeholder="Email"/>
                        </div>
                        <div class="col-12">
                            <label>Password</label>
                            <input type="password" name="password" class="form-control" placeholder="Password"/>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="rememberMe"/>
                                <label class="form-check-label" for="rememberMe"> Remember me</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-dark float-center">Login</button>
                        </div>
                    </form>
                    <hr class="mt-4"/>
                    <div class="col-12">
                        <p class="text-center mb-0">Have not account yet? <Link to="/Signup">Signup</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Login;
