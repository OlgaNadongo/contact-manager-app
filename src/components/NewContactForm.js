import React from "react";
function NewContactForm(){

    return(<div className="formcontainer" style={{backgroundColor:"red"}}>
              <form>
                <input placeholder="Name" name="name" />
                <input placeholder="Email" name="email" />
                <input type="submit" className='submitbtn' value="Add Contact" />
              </form>
          </div>)
}

export default NewContactForm