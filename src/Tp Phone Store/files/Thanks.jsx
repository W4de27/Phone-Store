import { useNavigate } from "react-router-dom"

export default function Thanks() {
    const navigate = useNavigate()
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"30px",minHeight:"100vh"}}>
      <h1 style={{fontSize:"5rem"}}>Thank You For Pay</h1>
      <p className="h5">Your payment has been successful. Thank you for your purchase.</p>
      <p className="h5">You will receive a confirmation email shortly.</p>
      <button className="btn btn-success px-5" onClick={() => navigate("/")}>Continue</button>
    </div>
  )
}
