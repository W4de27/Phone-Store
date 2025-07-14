import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCart , DeleteAllCarts } from "../phoneStore-Slice"

export default function Cart() {
  
  const navigate = useNavigate()
  const carts = useSelector((state) => state.PhoneStore.carts)
  const dispatch = useDispatch()
  const cartLength = useSelector((state) => state.PhoneStore.carts.length)

  function UpdateTotal() {
    let total = 0
    carts.forEach(item => {
      total += item.price * item.quantity
    })
    return total
  }
  function Delete(Id) {
    dispatch(deleteCart(Id))
  }

  function ResetCarts() {
    if(carts.length === 0) {
      window.alert("No Items Choose in yet !")
    } else {
      navigate("/Thanks")
      dispatch(DeleteAllCarts())
    }
    
  }

  return (
    <div className="container-fluid px-5 pt-3">
      <div className=" p-3" style={{display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(0, 247, 255, 0.21)"}}>
              <h1>PhoneStore</h1>
              <ul className="d-flex gap-4" style={{listStyle: "none",cursor:"pointer"}}>
                <li> <button className="btn border-success text-success " onClick={() => navigate("/")}>Products</button> </li>
                <li> <button className="btn btn-success " >Carts</button> </li>
              </ul>
              <div>
                <button className="btn"><FaShoppingCart className="h2" /></button>
                <span className="bg-danger text-white"
                style={{position:"relative",top:"-20px",right:"10px",borderRadius:"10px",padding:"4px"}}>
            {cartLength}
          </span>
              </div>
            </div>

            <h1 className="my-2">Carts :</h1>

            {carts.length === 0 ? <h1 className="alert-warning p-4 mt-5 w-50">No Item Choosing For Pay !!</h1> : (
              <div>
                <div style={{display:"flex",justifyContent:"start",alignItems:"center",gap:"50px",marginTop:"20px"}}>
              {carts.map(item => {
                return (
                  <div key={item.id} className="border p-2" style={{background:"rgba(0, 247, 255, 0.26)",borderRadius:"15px"}}>
                    <img src={item.img} style={{width:"300px",height:"280px"}} />
                    <h3 className="mt-3 text-center"> {item.title} </h3>
                    <p className="h6 text-dark">Price :  <strong className="h5 text-secondary">MAD {item.price}</strong> </p>
                    <p className="h6"> Quantity : <strong className="h5 text-secondary">{item.quantity}</strong> </p>
                    <p className="h6"> Total : <strong className="h5 text-secondary">{(item.price * item.quantity).toFixed(2)}</strong> </p>
                    <div className="text-center my-3">
                      <button className="btn btn-danger px-5" onClick={() => Delete(item.id)}>Delete</button>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="h4 mt-3"> Total : MAD {UpdateTotal().toFixed(2)} </p>
              <button className="btn btn-primary w-100 mt-2" onClick={ResetCarts}>Pay</button>
              </div>
            )}
    </div>
  )
}
