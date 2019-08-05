import React, { useState } from 'react';
import './LoginForm.css'
import { Link } from 'react-router-dom';

function LoginForm() {  
	const [myClass, setMyClass] = useState('');

	const addClass = (e) => {
		setMyClass('right-panel-active')
	}

	const removeClass = (e) => {
		setMyClass('')
	}

	const handleForm = e => {
		e.preventDefault();
	}

  return (
    <div>
    <Link to="/"><i className="fas fa-arrow-left"></i></Link>

      <div className={`page-container ${myClass}`}>
      	<div className="form-container sign-up-container">
      		<form onSubmit={handleForm}>
      			<h1 className="font-weight-bold m-0">Create Account</h1>
      			<div className="social-container">
      				<Link to='#' className="social"><i className="fab fa-facebook-f"></i></Link>
      				<Link to='#' className="social"><i className="fab fa-google-plus-g"></i></Link>
      				<Link to='#' className="social"><i className="fab fa-linkedin-in"></i></Link>
      			</div>
      			<span>or use your email for registration</span>
      			<input type="text" placeholder="Name" />
      			<input type="email" placeholder="Email" />
      			<input type="password" placeholder="Password" />
      			<button className="rounded">Sign Up</button>
      		</form>
      	</div>
      	<div className="form-container sign-in-container">
      		<form onSubmit={handleForm}>
      			<h1 className="font-weight-bold m-0">Sign in</h1>
      			<div className="social-container">
      				<Link to='#' className="social"><i className="fab fa-facebook-f"></i></Link>
      				<Link to='#' className="social"><i className="fab fa-google-plus-g"></i></Link>
      				<Link to='#' className="social"><i className="fab fa-linkedin-in"></i></Link>
      			</div>
      			<span>or use your account</span>
      			<input type="email" placeholder="Email" />
      			<input type="password" placeholder="Password" />
      			<Link to="#">Forgot your password</Link>
      			<button className="rounded">Sign In</button>
      		</form>
      	</div>
      	<div className="overlay-container">
      		<div className="overlay">
      			<div className="overlay-panel overlay-left">
					<h1 className="font-weight-bold m-0">One of Us?</h1>
					<p className="mt-20 mb-30">If you already have an account, just sign in. We've missed you!</p>
					<button className="ghost rounded" id="signIn" onClick={removeClass}>Sign In</button>
				</div>
				<div className="overlay-panel overlay-right">
					<h1 className="font-weight-bold m-0">New Here?</h1>
					<p className="mt-20 mb-30">Sign up and discover a great amount of new opportunities</p>
					<button className="ghost rounded" id="signUp" onClick={addClass}>Sign Up</button>
				</div>
      		</div>
      	</div>
      </div> 
    </div>
  );
}

export default LoginForm;