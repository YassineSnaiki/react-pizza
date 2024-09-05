import { Link } from "react-router-dom";

function Cart() {
  return (
    <footer className=" bg-stone-800 text-stone-200 flex justify-between p-6">
      <div className=" space-x-2">
        <span>X Pizzas</span>
        <span>$X</span>
      </div>
      <Link>Open Cart &rarr;</Link>
    </footer>
  );
}

export default Cart;
