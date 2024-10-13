
const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center m-32 gap-5 h-[85vh]">
      <section className="flex flex-col items-center gap-4 mx-7 text-center">
        <h1 className="font-bold text-4xl mb-5">Make an Account😆</h1>
        {/* <div className="my-2">
          <p className="my-2">Please enter your details</p>
          <button className="py-2 px-8 border-2 border-black rounded-full flex gap-2 items-center w-80">
            <FaGoogle size={20} />
            Login with Google
          </button>
          <button className="py-2 px-8 border-2 border-black rounded-full flex gap-2 items-center w-80">
            <FaGoogle size={20} />
            Login with Facebook
          </button>
        </div> */}
        <form className="flex flex-col gap-2 items-center justify-center">
          <input
            type="text"
            placeholder="Email"
            className="py-2 px-10 rounded-full w-72 border border-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-2 px-6 rounded-full w-72 border border-gray-300"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="py-2 px-6 rounded-full w-72 border border-gray-300"
          />
          <button className="mt-4 py-2 px-2 w-32 rounded-full bg-accent text-white">
           Sign Up
          </button>
        </form>
        <p className="text-gray-400">
          Don't have an account? <a href="/login" className="text-gray-700 font-semibold cursor-pointer hover:underline hover:decoration-wavy">Login</a>
        </p>
      </section>
      {/* <section>
        <img src="https://via.placeholder.com/500" alt="image" />
      </section> */}
    </div>
  )
}

export default SignUpPage