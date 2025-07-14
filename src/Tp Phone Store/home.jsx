import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./files/Products";
import Cart from "./files/Cart";
import Thanks from "./files/Thanks";
import Details from "./files/Details";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setDatabase } from "./phoneStore-Slice"

export default function PhoneStore() {

  const dispatch = useDispatch()
  useEffect(() => {
    axios.get("phoneStore.json")
    .then(res => {dispatch(setDatabase(res.data))})
    .catch(err => console.log(err))
  } , [dispatch])

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Products /> } />
            <Route path="/Cart" element={ <Cart /> } />
            <Route path="/Details/:id" element={ <Details /> } />
            <Route path="/Thanks" element={ <Thanks /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
