import React, { useState ,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import api from "../../constants/api";

const bnr = require("./../../images/banner/bnr1.jpg");

const ShopRegister = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    otp_no:"",
  });
  const [otp, setOTP] = useState('');
  const generateOTP = () => {
    const min = 1000;
    const max = 9999;
    const newOTP = Math.floor(Math.random() * (max - min + 1)) + min;
    setOTP(newOTP.toString());
    
  };

  const [mailId, setmailId] = useState("");
  const getEmail = () => {
    api.get("/setting/getMailId").then((res) => {
      setmailId(res.data.data[0]);
    });
  };
  const [userMessage, setMessage] = useState("");
  const getMessage = () => {
    api.get("/setting/getMessage").then((res) => {
      setMessage(res.data.data[0]);
    });
  };
  const sendMail = () => {
    {
  

      // If both email and password are valid, proceed with form submission
      {
        const to = formData.email;
        const subject = "Registration";
        api
          .post("/commonApi/sendUseremail", { to,subject })
          .then((res) => {
            console.log(res.data.data);

            setTimeout(() => {
              history.push("/");
            }, 100);
          })
          .catch((err) => {
           
          });
      }
    }
    

      {
        const to = mailId.email;
        const text = JSON.stringify(formData);
        const subject = "Registration";
        const dynamic_template_data = {
          first_name: formData.first_name,
          email: formData.email,
          password: formData.password,
        };
        api
          .post("/commonApi/sendregisteremail", {
            to,
            text,
            subject,
            dynamic_template_data,
          })
          .then(() => {});
      }
    
  };
  const formFields = [
    { name: "first_name", label: "First Name", type: "text", required: true },
    { name: "last_name", label: "Last Name", type: "text", required: true },
    { name: "email", label: "E-Mail", type: "email", required: true },
    { name: "password", label: "Password", type: "password", required: true },
  ];
  useEffect(() => {
    getEmail();
    getMessage();
    generateOTP();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
	api
          .post("/api/register", formData)
          .then((res) => {
            console.log(res.data.data);
            console.log('otp',otp);
           
            setTimeout(() => {
              // Pass the contact ID as state to the next page
              history.push({
                pathname: `/register-verification/${formData.email}`,
               state: { otpNo: formData.otp_no, mobNo: formData.mobile },
             
              });
            }, 1000);
           
            // console.log('contact',res.data.data.contact_id);
            console.log('cont',formData);
          })
          .catch(() => {
           
          });

    console.log("Submitted Data:", formData);
    //history.push("/");
  };

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle bg-pt"
          style={{ backgroundImage: `url(${bnr})` }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Register</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Register</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-full content-inner-2 shop-account">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="m-b40 m-md-b20">Create An Account</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="p-a30 border-1 max-w500 m-auto radius-sm">
                  <form id="register-form" onSubmit={submitHandler}>
                    <h3 className="m-b5">Personal Information</h3>
                    <p>If you have an account with us, please log in.</p>

                    {formFields.map((field) => (
                      <div key={field.name} className="form-group">
                        <label>{field.label} *</label>
                        <input
                          name={field.name}
                          type={field.type}
                          className="form-control"
                          placeholder={field.label}
                          required={field.required}
                          value={formData[field.name]}
                          onChange={handleChange}
                        />
                      </div>
                    ))}

                    <div className="text-left">
                      <button type="submit" className="btn btnhover">
                        CREATE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopRegister;

 