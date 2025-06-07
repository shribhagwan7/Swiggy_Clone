import React from "react";
import { FaGooglePlay, FaApple, FaLinkedin, FaInstagram, FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 mt-4 p-6"><hr className="w-full border-t-2 border-gray-300 rounded-lg mb-8" />
      <div className="text-center font-bold text-lg mb-4">
        For better experience, <span className="font-bold">download the Swiggy app now</span>
      </div>
      <div className="flex justify-center gap-4 mb-10">
        <a target="_blank" href="https://accounts.google.com/v3/signin/accountchooser?authuser=0&continue=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Din.swiggy.android%26referrer%3Dutm_source%253Dswiggy%2526utm_medium%253Dheader&followup=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Din.swiggy.android%26referrer%3Dutm_source%253Dswiggy%2526utm_medium%253Dheader&ifkv=AdBytiPKeqQUF9VnPhkY7ZC17vbQxm52yqQfTYUEiXxDz6Z3i_yIdeTg6MNrl1ixYf5YY7NQPL_o&osid=1&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1866184496%3A1748947565259332">
        <button className="bg-black text-white flex items-center px-4 py-2 rounded-md cursor-pointer">
          <FaGooglePlay className="mr-2" /> Get it on Google Play
        </button></a>
        <a target="_blank" href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
        <button className="bg-black text-white flex items-center px-4 py-2 rounded-md cursor-pointer">
          <FaApple className="mr-2" /> Download on the App Store
        </button></a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        <div>
          <div className="flex items-center gap-2">
            {/* <h3 className="text-orange-600 font-bold text-xl mb-2"> */}
            <img className="w-12 h-12 cursor-pointer rounded-2xl" src="data:image/jpeg;base64,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"></img>
            <span className="text-orange-600 font-bold text-xl mb-2">Swiggy</span>
          {/* </h3> */}
          </div>
          <p className="text-sm font-bold mt-2">© 2025 Swiggy Limited</p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <ul className="space-y-3 font-semibold">
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Dineout</li>
            <li>Swiggy Genie</li>
            <li>Minis</li>
            <li>Pyng</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Contact us</h4>
          <ul className="space-y-3 font-semibold">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>

          <h4 className="font-bold mt-4 mb-2">Legal</h4>
          <ul className="space-y-3 font-semibold">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Available in:</h4>
          <ul className="space-y-3 font-semibold">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>
              <select className="mt-1 border rounded px-2 py-1 text-xs">
                <option>679 cities</option>
              </select>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Life at Swiggy</h4>
          <ul className="space-y-3 font-semibold">
            <li>Explore with Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>

          <h4 className="font-bold mt-4 mb-2">Social Links</h4>
          <div className="flex gap-3 text-xl">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebookF />
            <FaPinterest />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
