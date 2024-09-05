import Button from "../ui/Button";



export default function MenuItem({item}) {  
    console.log(item);
    return (
        <li className="flex py-2 items-center">
            <img src={item.imageUrl} alt="pizza" className={`w-24 pr-2 ${item.soldOut && "grayscale"}`} />
            <div >
                <p className="flex flex-col">
                <span>
                    {item.name}
                </span>
                <span className="font-light text-sm">
                   <i> {item.ingredients.join(', ')}</i>
                </span>
                </p>
                <span className="block mt-4 font-light"  >
                    {item.soldOut ? "SoldOut" : `$${item.unitPrice}.00`}
                </span>
            </div>
            {!item.soldOut &&
            <Button className="ml-auto">
                ADD TO CART
            </Button>
            }
        </li>
    )
}