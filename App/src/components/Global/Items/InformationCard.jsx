export default function InformationCard({ icon, title, text }) {
  return (
    <div className="w-80 border-[0.1rem] border-gray-400 bg-white shadow-xl flex flex-col p-4 rounded-md">
      <img src={`${icon}.png`} className="w-12" />
      <p className="use-poppins font-bold my-2">{title}</p>
      <p className="use-poppins text-gray-400 text-xs">{text}</p>
    </div>
  );
}
