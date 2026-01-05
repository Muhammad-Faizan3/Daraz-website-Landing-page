import React, { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <div className="w-full bg-[#F85606] ">

        <div className="flex justify-end px-4 py-2 text-white lg:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl">
            {open ? "✕" : "☰"}
          </button>
        </div>

        <div
          className={`w-full border-b border-orange-400 text-white text-xs sm:text-sm font-mono
          ${open ? "flex flex-col" : "hidden"} lg:flex lg:flex-row lg:justify-end lg:items-center px-4 py-2`}
        >
          <button className="lg:mr-6 xl:mr-10 mb-2 lg:mb-0 hover:text-gray-200 transition-colors px-2 py-1 cursor-pointer">
            SAVE MORE ON APP
          </button>
          <button className="lg:mr-6 xl:mr-10 mb-2 lg:mb-0 hover:text-gray-200 transition-colors px-2 py-1 cursor-pointer">
            SELL ON DARAZ
          </button>
          <button className="lg:mr-6 xl:mr-10 mb-2 lg:mb-0 hover:text-gray-200 transition-colors px-2 py-1 cursor-pointer">
            HELP & SUPPORT
          </button>

          <button
            onClick={() => setShowLogin(true)}
            className="lg:mr-6 xl:mr-10 mb-2 lg:mb-0 hover:text-gray-200 transition-colors px-2 py-1 cursor-pointer"
          >
            LOGIN
          </button>

          <button
            onClick={() => setShowSignup(true)}
            className="hover:text-gray-200 transition-colors px-2 py-1 cursor-pointer"
          >
            SIGN UP
          </button> 
          <button className="lg:mr-6 xl:mr-10 mb-2 lg:mb-0 hover:text-gray-200 transition-colors px-2 py-1 cursor-pointer">
            زبان تبدیل کریں
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between px-4 md:px-6 lg:px-8 py-3 border-b border-orange-400">

          <div className="flex items-center w-full sm:w-auto justify-between mb-3 sm:mb-0">
            <img
              src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png"
              className="w-32 sm:w-36 md:w-40 lg:w-44 cursor-pointer"
              alt="Daraz"
            />

            <div className="text-white text-2xl cursor-pointer sm:hidden">
              <svg 
                className="w-6 h-6 text-white cursor-pointer" 
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/>
              </svg>
            </div>
          </div>


          <div className="flex w-full sm:w-auto sm:flex-1 mx-0 sm:mx-4 max-w-2xl lg:max-w-3xl mb-3 sm:mb-0">
            <input
              className="flex-1 h-10 sm:h-12 px-3 sm:px-4 rounded-l-md outline-none bg-white text-sm sm:text-base"
              placeholder="Search in Daraz..."
            />
            <button className="w-10 sm:w-12 bg-[#FF9B4A] rounded-r-md flex items-center justify-center hover:bg-[#FF8B3A] transition-colors">
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512"
                fill="#fff"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
              </svg>
            </button>
          </div>
          <div className="hidden sm:block text-white text-2xl cursor-pointer">
            <svg 
              className="w-6 h-6 md:w-7 md:h-7 text-white cursor-pointer" 
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/>
            </svg>
          </div>
        </div>
      </div>
      {showLogin && (
        <Modal  onClose={() => setShowLogin(false)}>
          <LoginForm
            onSwitchToSignup={() => {
              setShowLogin(false);
              setShowSignup(true);
            }}
          />
        </Modal>
      )}

     
      {showSignup && (
        <Modal
          title="Create your Daraz Account"
          onClose={() => setShowSignup(false)}
        >
          <SignupForm
            onSwitchToLogin={() => {
              setShowSignup(false);
              setShowLogin(true);
            }}
          />
        </Modal>
      )}
    </>
  );
}


function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md p-4 sm:p-6 rounded-lg relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-xl hover:text-gray-600 transition-colors"
        >
          ✕
        </button>
        <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{title}</h2>
        {children}
      </div>
    </div>
  );
}

function LoginForm({ onSwitchToSignup }) {
  const [loginMethod, setLoginMethod] = useState("phone");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-4">

      <div className="flex border-b">
        <button
          type="button"
          className={`flex-1 py-2 text-sm sm:text-base ${
            loginMethod === "phone"
              ? "text-[#F85606] border-b-2 border-[#F85606] font-medium"
              : "text-gray-500"
          }`}
          onClick={() => setLoginMethod("phone")}
        >
          Phone
        </button>

        <button
          type="button"
          className={`flex-1 py-2 text-sm sm:text-base ${
            loginMethod === "email"
              ? "text-[#F85606] border-b-2 border-[#F85606] font-medium"
              : "text-gray-500"
          }`}
          onClick={() => setLoginMethod("email")}
        >
          Email
        </button>
      </div>


      {loginMethod === "phone" ? (
        <input
          type="tel"
          placeholder="Please enter your phone"
          className="w-full border px-3 py-2 rounded text-sm sm:text-base"
        />
      ) : (
        <input
          type="email"
          placeholder="Please enter your email"
          className="w-full border px-3 py-2 rounded text-sm sm:text-base"
        />
      )}


      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Please enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2 rounded text-sm sm:text-base pr-20"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs sm:text-sm text-[#F85606] cursor-pointer"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <button className="w-full cursor-pointer bg-[#F85606] text-white py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-[#E84B00] transition-colors">
        LOGIN
      </button>

      <p className="text-center text-xs sm:text-sm">
       Don't have an account? {" "}
        <button
          type="button"
          onClick={onSwitchToSignup}
          className="text-[#F85606] hover:underline cursor-pointer"
        >
          Create Account
        </button>
      </p>
    </form>
  );
}

function SignupForm({ onSwitchToLogin }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Please enter your full name"
        className="w-full border px-3 py-2 rounded text-sm sm:text-base"
      />
      <input
        type="tel"
        placeholder="Please enter your phone"
        className="w-full border px-3 py-2 rounded text-sm sm:text-base"
      />
      
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Please enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2 rounded text-sm sm:text-base pr-20"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs sm:text-sm text-[#F85606] cursor-pointer"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <button className="w-full cursor-pointer bg-[#F85606] text-white py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-[#E84B00] transition-colors">
        SIGN UP
      </button>

      <p className="text-center text-xs sm:text-sm">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-[#F85606] hover:underline cursor-pointer"
        >
          Login
        </button>
      </p>
    </form>
  );
}

export default Header;