import { Password } from "primereact/password";
import "primereact/resources/themes/soho-light/theme.css";
import { useState } from "react";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import LogoImage from "../../public/logo.png";

export default function LogInPage() {
  const [value, setValue] = useState("");
  return (
    <main className="bg-white w-1/4 float-right h-screen flex flex-col gap-3 items-center pt-32">
      <img className="w-" src={LogoImage} alt="" />
      <h1 className="font-bold text-3xl">Welcome back!</h1>
      <p>Please enter your email & password to continue :)</p>
      <form className="flex flex-col gap-8 p-10 items-start" action="submit">
        <FloatLabel>
          <InputText type="text" />
          <label htmlFor="inputtext">E-mail</label>
        </FloatLabel>
        <FloatLabel>
          <Password
            variant="filled"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            feedback={false}
            tabIndex={1}
          />
          <label htmlFor="password">Password</label>
        </FloatLabel>

        <Button
          label="Submit"
          className="px-2 py-1 text-black border-2 border-solid
        border-black hover:bg-black hover:text-white transition-all
        duration-200"
        />
      </form>
      <p className="text-sm text-stone-800">
        Don't have an account yet?{" "}
        <span className="font-bold underline text-stone-900 cursor-pointer">
          Create one now!
        </span>
      </p>
      <p className="absolute bottom-0 text-xs text-stone-800">
        Created to test PrimeReact library
      </p>
    </main>
  );
}
