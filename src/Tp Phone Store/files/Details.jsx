import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import { addCarts } from "../phoneStore-Slice"


export default function Details() {
  const navigate = useNavigate()
  const { id } = useParams()
  const data = useSelector(state => state.PhoneStore.database.find((item) => item.id === parseInt(id)))
  const [quantity , setQuantity] = useState(1)
  const dispatch = useDispatch()

  function Cart() {
    dispatch(addCarts({
      id: data.id,
      title: data.marque,
      price: parseFloat(data.prix),
      quantity: parseInt(quantity),
      img: data.img,
      totalPrice: parseFloat(data.prix * quantity),
    }))
    navigate("/Cart")
  }

  return (
    <div className="mt-5 ms-5">
      <button className="btn btn-danger mb-3" onClick={() => navigate("/")} style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}><FaArrowLeft /> Previous</button>
      <h1 className="mb-5"> Details : {data.marque} </h1>
      <div style={{display:"flex",justifyContent:"start",alignItems:"center",gap:"50px"}}>
        <div className="">
          <img src={data.img} className="img-thumbnail bg-warning roundeds" style={{width:"750px",height:"550px"}}/>
        </div>

        <div style={{width:"750px"}}>
          <p className="h5" style={{lineHeight:"180%"}}> {data.description} </p>
          <h1 className="mb-4" style={{marginTop:"80px"}}> <strong>MAD {data.prix} </strong> </h1>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-control w-25 border-success text-success" />
            <p className="h5 my-3"> Total : {(data.prix * quantity).toFixed(2)} </p>
            <button className="btn btn-success" onClick={Cart}> Add To Cart </button>
          </div>
        </div>
      </div>
    </div>
  )
}
