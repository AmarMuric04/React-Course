export const RightArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3 12.013L20.789 12m-6.776 7L21 12l-6.988-7"
    />
  </svg>
);

export const LeftArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M21 12.013L3.211 12m6.777 7L3 12l6.988-7"
    />
  </svg>
);
