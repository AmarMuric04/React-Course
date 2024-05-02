import Logo from "../../public/BLAJVINANCE.png";
import BG from "../../public/LoginBGmain.jpg";

export default function SignUp() {
  return (
    <main
      id="signup"
      className="bg-stone-800 w-screen h-screen grid place-items-center"
    >
      <div
        id="signup-inner"
        className="w-[95%] h-[90%] flex justify-end px-8 pt-16 pb-32"
      >
        <div className="bg-white rounded-lg w-1/4 h-full flex flex-col items-center p-16 gap-6">
          <img src={Logo} alt="" className="h-32" />
          <div className="flex flex-col">
            <label htmlFor="email">E-MAIL</label>
            <input type="email" name="" id="email" />
          </div>
          <div className="flex w-full gap-5">
            <div>
              <label htmlFor="password" className="uppercase text-sm">
                password
              </label>
              <input type="password" name="" id="password" />
            </div>{" "}
            <div>
              <label htmlFor="confirm-password" className=" uppercase text-sm">
                confirm password
              </label>
              <input type="password" name="" id="confirm-password" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
