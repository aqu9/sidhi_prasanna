import { useState } from "react";
import Custom_Grid from "../comps/custom_grid";

const a = [
  {
    id: "1",
    item: "Kurtas",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUazNtVg4IL6h8zWEDtnO-Yc9gblFGRc0ifg&usqp=CAU",
  },
  {
    id: "2",
    item: "Dress Material",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtO6xlsrNx4qbbExGSkP_bUGJchaJfsr0bA&usqp=CAU",
  },
  {
    id: "3",
    item: "Salwars and Churidars",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznSLutKfpM9Vo8Xb7Ia2CSN7CwLiMU_EPaw&usqp=CAU",
  },
  {
    id: "4",
    item: "Kurtis and Tunics",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5a6dL2m59ZZegGltKb6InPtdX3W20YLiXJg&usqp=CAU",
  },
  {
    id: "5",
    item: "Sarees",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk-4OLf2tpdEqR55VL2RDTTKWkQ3qU28xrbQ&usqp=CAU",
  },
  {
    id: "6",
    item: "Dupattas",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1RkxBNYPj6sLhLww4K9KWJoFfI57tdTaasQ&usqp=CAU",
  },
  {
    id: "7",
    item: "Kurta Suit Sets",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BxJhucfDA76rI4mL_bjoWYiWNfUftSHJzw&usqp=CAU",
  },
  {
    id: "8",
    item: "Blouses",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyTpKWHr3GxQodNc3kY_JoQZe4JruOkL13Wg&usqp=CAU",
  },
  {
    id: "9",
    item: "Leggings",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDzkH2hk37fDgh4BlkRDnoBgJulrHbqLx9oPWf6vrrXrwKFKQeVVHwK8tg__3m98vecg&usqp=CAU",
  },
  {
    id: "10",
    item: "Skirts and Ghagras",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqroQJNUAjsI97S_04i4jhNk9paA_LNPcB6awc6dIdCLrZMs7v10MwDhOlnpiOBu3TSwE&usqp=CAU",
  },
  {
    id: "11",
    item: "Shawls and Wraps",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehSzJN6iqN29tGHw4_BdB7PJLR0yVaNxyew&usqp=CAU",
  },
  {
    id: "12",
    item: "Palazzos and Culottes",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNt8o0RW-KMQfNS7CSVMWqahy8jhWJPZx_OQ&usqp=CAU",
  },
];

export default function Name() {
  const [data, setData] = useState(a);
  const changeInput = (e) => {
    const newData = a.filter((data) =>
      data.item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(newData);
  };
  return (
    <div>
      <label htmlFor="test">Type Something: </label>
      <input type="text" id="test" onChange={changeInput} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Custom_Grid route="model" data={data} />
    </div>
  );
}
