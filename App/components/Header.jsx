import Logo from "../public/Logo.png";
import OrderButton from "./OrderButton";

const navLinkCSS = "hover:text-yellow-400 transition-all cursor-pointer";

export default function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 px-20 py-4 z-50 text-white flex justify-between items-center use-poppins">
      <div className="flex gap-8 items-center">
        <img className="h-20" src={Logo} />
        <p className="use-playwrite text-3xl text-yellow-400">DineDivine</p>
      </div>
      <ul className="flex items-center gap-8 text-lg">
        <li className={navLinkCSS}>Home</li>
        <li className={navLinkCSS}>About Us</li>
        <li className={navLinkCSS}>Shop</li>
        <li className={navLinkCSS}>Services</li>
        <li className={navLinkCSS}>Blog</li>
        <li className={navLinkCSS}>Pages</li>
        <li className={navLinkCSS}>Contact Us</li>
      </ul>
      <div className="flex items-center gap-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
          className={navLinkCSS}
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 14 14"
          className={navLinkCSS}
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12.28 6H1.72a1 1 0 0 0-1 1.2l1.1 5.5a1 1 0 0 0 1 .8h8.36a1 1 0 0 0 1-.8l1.1-5.5a1 1 0 0 0-1-1.2M9 2.5L11 6M3 6l2-3.5"
          />
        </svg>
        <OrderButton />
      </div>
    </header>
  );
}
