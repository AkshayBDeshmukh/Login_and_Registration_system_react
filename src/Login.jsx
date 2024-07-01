import React from 'react'

function Login(){
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const usegate=useNavigate()

    const handleSubmint=(e)=>{
        e.preventDefault()
        axios.post('mongodb://localhost:3001/login',{email,password})
        .then(result=>{
            console.log(result)
            if(result.dat==="Success"){
                Navigate('/home')
            }
         
        })
        .catch(err=>console.log(err)) 
    }


    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <from onSubmit={handleSubmint}>
                <div className="mb-3">
                    <label htmlFor="email">
                       <strong>Name</strong>
                    </label>
                    <input
                     type="text"
                     placeholder="Enter Name"
                     autoCapitalize="off"
                     name="email"
                     className="form-control rounded-0"
                     />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                       <strong>Email</strong>
                    </label>
                    <input
                     type="text"
                     placeholder="Enter Email"
                     autoCapitalize="off"
                     name="email"
                     className="form-control rounded-0"
                     />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                       <strong>Password</strong>
                    </label>
                    <input
                     type="text"
                     placeholder="Enter Password"
                     autoCapitalize="off"
                     name="password"
                     className="form-control rounded-0"
                     />
                </div>
                < button type="Submit" className="btn btn-success w-100 rounded-0">
                    Register
                </button>
                </from>
                <p> Already Have an Account</p>
                <Link to='/login'  className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link>
                
            </div>
        </div>
    );


}

export default Login;