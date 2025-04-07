import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const handleRegister = (e) =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    createUser(email , password)
    .then(result => {
      console.log(result.user);
      
    })
    .catch(err => {
      console.log(err);
    })

  } 
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center mb-6">Welcome back!</h2>



          <div className="text-center text-sm text-gray-500 mb-4">OR LOGIN WITH EMAIL</div>

          <form onSubmit={handleRegister}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none"
            />

            <button className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800">
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            OR <a to="/login" href="#" className="text-blue-500">SIGN IN</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;