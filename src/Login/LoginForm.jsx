// import { signIn } from "next-auth/react";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";

export default function LoginForm() {
  const { signInWithGoogle } = useContext(AuthContext)
  const handleLoginForm = (e) => {
        console.log(e); 
  }
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()

      // toast.success('Signin Successful')
    } catch (err) {
      console.log(err)
      // toast.error(err?.message)
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Welcome back!</h2>
        
        <button
        //   onClick={() => signIn("google")}
        onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center border rounded-lg p-2 mb-4 gap-2 text-gray-600 hover:bg-gray-100"
        >
          {/* <img src="/google-logo.png" alt="Google" className="w-5 h-5 mr-2" /> */}
          <FcGoogle className="text-2xl" />

          Sign in with Google
        </button>
        
        <div className="text-center text-sm text-gray-500 mb-4">OR LOGIN WITH EMAIL</div>

        <form onSubmit={handleLoginForm}>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none"
        />
        </form>

        <button className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800">
          Sign In
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          OR <a to="/register" href="#" className="text-blue-500">SIGN UP</a>
        </p>
      </div>
    </div>
  );
}
