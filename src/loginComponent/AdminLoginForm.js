import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn,MDBInput } from 'mdbreact';

const FormPage = () => {
  return (
    // <MDBContainer>
    //   <MDBRow>
    //     <MDBCol md="6">
    //       <form>
    //         <p className="h4 text-center mb-4">Sign up</p>
    //         <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
    //           Your name
    //         </label>
    //         <input
    //           type="text"
    //           id="defaultFormRegisterNameEx"
    //           className="form-control"
    //         />
    //         <br />
    //         <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
    //           Your email
    //         </label>
    //         <input
    //           type="email"
    //           id="defaultFormRegisterEmailEx"
    //           className="form-control"
    //         />
    //         <br />
    //         <label
    //           htmlFor="defaultFormRegisterConfirmEx"
    //           className="grey-text"
    //         >
    //           Confirm your email
    //         </label>
    //         <input
    //           type="email"
    //           id="defaultFormRegisterConfirmEx"
    //           className="form-control"
    //         />
    //         <br />
    //         <label
    //           htmlFor="defaultFormRegisterPasswordEx"
    //           className="grey-text"
    //         >
    //           Your password
    //         </label>
    //         <input
    //           type="password"
    //           id="defaultFormRegisterPasswordEx"
    //           className="form-control"
    //         />
    //         <div className="text-center mt-4">
    //           <MDBBtn color="unique" type="submit">
    //             Register
    //           </MDBBtn>
    //         </div>
    //       </form>
    //     </MDBCol>
    //   </MDBRow>
    // </MDBContainer>
    <MDBContainer>
          <MDBRow>
            <MDBCol md="6" lg="12">
              <form>
                <p className="h4 text-center mb-4">Sign in Admin</p>
                <MDBInput
                  type="text"
                  id="admin_id"
                  className="form-control"
                  label="Enter Admin Id"
                />
                <MDBInput
                  type="password"
                  id="admin_password"
                  className="form-control"
                  label="Enter Your password"
                />
                <div className="text-center mt-4">
                  <MDBBtn clasName="btn btn-success" >Login Admin</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
  );
};

export default FormPage;