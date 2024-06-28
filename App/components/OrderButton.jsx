export default function OrderButton() {
  return (
    <button className="px-6 py-3 gap-2 mt-8 text-black hover:bg-yellow-300 bg-yellow-400 text-sm font-bold flex items-center">
      Order Now{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.78em"
        height="2em"
        viewBox="0 0 16 9"
      >
        <path
          fill="currentColor"
          d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
        />
        <path
          fill="currentColor"
          d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
        />
      </svg>
    </button>
  );
}
