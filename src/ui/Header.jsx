import SearchOrder from "../features/SearchOrder";
import UserName from "../features/UserName";

function Header() {
  return (
    <nav className="flex justify-between items-center bg-yellow-400 px-6 py-4 border-b border-black">
      <h2 className=" tracking-widest font-normal uppercase stroke-neutral-800">Fast react pizza co.</h2>
      <SearchOrder />
      <UserName />
    </nav>
  );
}

export default Header;
