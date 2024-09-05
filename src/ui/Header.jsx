import SearchOrder from "../features/SearchOrder";
import UserName from "../features/UserName";

function Header() {
  return (
    <nav className="flex justify-between items-center bg-yellow-400 px-6 py-4 border-b border-black">
      <h2>Fast react pizza co.</h2>
      <SearchOrder />
      <UserName />
    </nav>
  );
}

export default Header;
