
function Button(){

  const styles = {
    padding: "10px",
    border: "none",
    backgroundColor:"#f1356d",
    color:"white",
    fontSize:"24px",
    borderRadius:"20px",
    fontWeight:"700",
    marginTop:"30px",
    marginLeft:"43%",
    cursor:"pointer",
    display:"block"

  } 

  return(
    <button style={styles}>Click Me</button>
  )
};

export default Button;