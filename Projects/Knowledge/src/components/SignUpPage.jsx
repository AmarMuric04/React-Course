import { Password } from "primereact/password";
import "primereact/resources/themes/soho-light/theme.css";
import { useState } from "react";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import LogoImage from "../../public/logo.png";

export default function SignUpPage({ onChangeToLogIn }) {
  return (
    <main className="bg-white w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 float-right min-h-screen h-full flex flex-col gap-3 items-center pt-0 md:pt-24">
      <img className="w-32 sm:w-64" src={LogoImage} alt="" />
      <h1 className="font-bold text-3xl">Welcome!</h1>
      <p className="text-center">Please create an account to continue :)</p>
      <form
        className="flex flex-col gap-8 p-0 md:p-10 items-center"
        action="submit"
      >
        <section className="flex gap-7 ">
          <FloatLabel>
            <InputText className="w-32" type="text" />
            <label htmlFor="text">First name</label>
          </FloatLabel>
          <FloatLabel>
            <InputText className="w-32" type="text" />
            <label htmlFor="text">Last name</label>
          </FloatLabel>
        </section>
        <FloatLabel>
          <InputText type="text" className="w-32 sm:w-72" />
          <label htmlFor="text">E-mail</label>
        </FloatLabel>
        <section className="flex gap-7 flex-col sm:flex-row">
          <FloatLabel>
            <Password
              variant="filled"
              className="w-full sm:w-32"
              feedback={false}
            />
            <label htmlFor="password">Password</label>
          </FloatLabel>
          <FloatLabel>
            <Password
              variant="filled"
              className="w-full sm:w-32"
              a
              feedback={false}
            />
            <label htmlFor="password" className="text-nowrap">
              Confirm Password
            </label>
          </FloatLabel>
        </section>

        <Button
          label="Log in"
          className="px-2 py-1 text-black border-2 border-solid
        border-black hover:bg-black hover:text-white transition-all
        duration-200"
        />
      </form>
      <p className="text-sm text-stone-800 text-center">
        Already have an account?{" "}
        <span
          className="font-bold underline text-stone-900 cursor-pointer"
          onClick={onChangeToLogIn}
        >
          Log in now!
        </span>
      </p>
      <p className="absolute bottom-0 text-xs text-stone-800">
        Created to test PrimeReact library
      </p>
    </main>
  );
}
