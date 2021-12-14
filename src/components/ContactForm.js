import React,{ useState, useEffect} from "react"; 

const ContactForm= (props) => {
    const initialFieldValue = {
        fullName:'',
        mobile:'',
        email:'',
        address:''

    }
    var[values,setValues] = useState(initialFieldValue)

    const handleInputChange = e=>{
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })

    }

    const handleFormSubmit = e =>{
        e.preventDefault();
        props.addOrEdit(values)

    }

   return (
   <>
    <form autoComplete="off" onSubmit={handleFormSubmit}>
         {/* full name  */}

    <div className="form-group input-group"> 
     <div className= "input-group-prepend" >
     <div className= "input-group-text" >
<i className="fas fa-user"></i>
     </div>
     </div>
     <input className="form-control" placeholder="Full Name" name="Full Name" 
     value={values.fullName}
     onChange={handleInputChange}
     />
     </div> 

     <div className="form-row">
     

     {/* mobile  */}
     <div className="form-group input-group col-md-6"> 
     <div className= "input-group-prepend" >
     <div className= "input-group-text" >
<i className="fas fa-mobile-alt"></i>
     </div>
     </div>
     <input className="form-control" placeholder="Mobile" name="mobile" 
     value={values.mobile}
     onChange={handleInputChange}

     />
     </div> 
         
         {/* email  */}
     <div className="form-group input-group col-md-6"> 
     <div className= "input-group-prepend" >
     <div className= "input-group-text" >
<i className="fas fa-envelop"></i>
     </div>
     </div>
     <input className="form-control" placeholder="Email" name="email"
      value={values.email}
     onChange={handleInputChange}

     />
     </div>
     </div>

     <div className="form-group "> 
     <textarea className="form-control" placeholder="Address" name="address"
     value={values.address}
     onChange={handleInputChange}
/>
         </div>

         <div className="form-group">
             <input type="submit" value ="save" className="btn btn-primary btn-block" />
         </div>
    </form>
    </>
    );
}
export default ContactForm