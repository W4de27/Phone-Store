import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Products() {

  const database = useSelector((state) => state.PhoneStore.database)
  const navigate = useNavigate()
  const cartLength = useSelector((state) => state.PhoneStore.carts.length)

  return (
    <div className="container-fluid px-5 pt-3 ">
      <div className=" p-3" style={{display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(0, 247, 255, 0.21)"}}>
        <h1 id="home">PhoneStore</h1>
        <ul className="d-flex gap-4" style={{listStyle: "none",cursor:"pointer"}}>
          <li> <button className="btn btn-success ">Products</button> </li>
          <li> <button className="btn border-success text-success " onClick={() => navigate("/Cart")}>Carts</button> </li>
        </ul>
        <div>
          <button className="btn" onClick={() => navigate(`/Cart`)}><FaShoppingCart className="h2" /></button>
          <span className="bg-danger text-white"
                style={{position:"relative",top:"-20px",right:"10px",borderRadius:"10px",padding:"4px"}}>
            {cartLength}
          </span>
        </div>
      </div>
    <h2 className="my-4">Products :</h2>
    <div style={{gap:"20px",display:"grid",gridTemplateColumns: "repeat(3, 1fr)",}} className="mb-5">
      {database.map((product) => (
        <div key={product.id} className="border text-center p-2" style={{background:"rgba(0, 247, 255, 0.26)",borderRadius:"15px",}} >
          <button className="btn" onClick={() => navigate(`/Details/${product.id}`)}>
            <img src={product.img} style={{width:"320px",height:"320px",borderRadius:"15px"}}/>
          </button>
          <h3 className="mt-3"> {product.marque} </h3>
          <p>MAD <span className="h4 text-secondary">{product.prix}</span> </p>
          <p className="h6" style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis",maxWidth:"350px"}} title={product.description}> {product.description} </p>
          <button className="btn btn-dark mt-2" onClick={() => navigate(`/Details/${product.id}`)}> Free Shipping </button>
        </div>
      ))}
    </div>
    </div>
  )
}
