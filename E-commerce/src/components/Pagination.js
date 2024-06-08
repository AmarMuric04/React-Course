import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { miscActions } from "../redux/misc";

export default function Pagination() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const page = +useSelector((state) => state.misc.page);

  const nextPage = () => {
    dispatch(miscActions.changePage("NEXT"));
    navigate(`/store/page/${page + 1}`);
  };
  const prevPage = () => {
    dispatch(miscActions.changePage("PREV"));
    navigate(`/store/page/${page - 1}`);
  };
  return (
    <div
      className={`w-3/5 flex items-center py-4 ${
        page !== 1
          ? page !== 9
            ? "justify-between"
            : "justify-start"
          : "justify-end"
      }`}
    >
      {page !== 1 && (
        <button
          className="border-1 border-green-400 rounded-md px-2 py-1
           hover:bg-green-400 transition-all"
          onClick={prevPage}
        >
          Prev Page
        </button>
      )}{" "}
      {page !== 9 && (
        <button
          className="border-1 border-green-400 rounded-md px-2 py-1 hover:bg-green-400 transition-all"
          onClick={nextPage}
        >
          Next Page
        </button>
      )}
    </div>
  );
}
