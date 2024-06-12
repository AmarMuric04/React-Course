import { Fragment, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { LoaderIcon } from "../assets/icons";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const error = useRouteError();


  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://dummyjson.com/products/category-list"
      );

      const categories = await response.json();

      setCategories(categories);
      setIsLoading(false);
    };

    fetchCategories();
  }, []);

  return (
    <main>
      <MainNavigation />
      <main className="flex">
        <main className="w-full poppins flex flex-col items-center mb-32">
          {isLoading ? (
            <Sidebar title={<LoaderIcon size="4em" />} iterable={[]} />
          ) : (
            <Sidebar
              title={
                <Fragment>
                  <h1 className="uppercase font-bold text-[3rem]">Oops!</h1>
                  <h2 className="uppercase text-4xl">
                    {error.message ? error.message : "Page not found!"}
                  </h2>
                  <p>Go back and look for products!</p>
                </Fragment>
              }
              iterable={categories}
            />
          )}
        </main>
      </main>
      {isLoading ? <Footer iterable={[]} /> : <Footer iterable={categories} />}
    </main>
  );
}
