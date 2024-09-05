import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

export default function Menu() {
    const menu = useLoaderData();
    
    return <ul className="h-full divide-y  divide-stone-200 py-2">
        
        {menu.map((el,i)=><MenuItem  item={el} key={i}/>)}
    </ul>
}

export async function loader() {
    const res = await fetch("https://react-fast-pizza-api.onrender.com/api/menu");

    
    if(!res.ok) throw Error("couldn't fetch menu");
    const {data}= await res.json();
  
    return data;
}