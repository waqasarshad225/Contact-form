import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });


  let name, value;
  const getUserData=(event)=>{
    name = event.target.name
    value = event.target.value
    setUser({...user , [name]: value})
  }

  const postData= async (e)=>{
    e.preventDefault();

    const {name, email, phone, address, message} = user;
    if(name && email && phone && address && message){
        const res = await fetch("https://contact-form-3b5ac-default-rtdb.firebaseio.com/contactform.json",
   {
    method: "POST",
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name,
        email,
        phone,
        address,
        message,
    }),
    
   }
   )
   if(res){
    setUser({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
      alert("Data stored successfully")
    
   }
    }else{
        alert("Please fill all feilds")
    }

   
  }


  return (
    <>
      <Container>
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          >
            <div
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>

        <Row className="mx-auto max-w-2xl text-center">
          <Col>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              How Can We Help?
            </p>
          </Col>
        </Row>

        <Form
          action="#"
          method="POST"
          className="mx-auto mt-4 mt-sm-5 max-w-xl sm:mt-5"
          
        >
          <Row>
            <Col sm={12}>
              <Form.Group controlId="name">
                <Form.Label className="block text-sm font-semibold leading-6 text-gray-900">
                  Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={getUserData}
                  value={user.name}
                />
              </Form.Group>
            </Col>
            
            <Col sm={12}>
              <Form.Group controlId="address">
                <Form.Label className="block text-sm font-semibold leading-6 text-gray-900">
                  Address
                </Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Enter your Address"
                  value={user.address}
                  onChange={getUserData}
                />
              </Form.Group>
            </Col>
            <Col sm={12}>
              <Form.Group controlId="email">
                <Form.Label className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={user.email}
                  onChange={getUserData}
                />
              </Form.Group>
            </Col>
            <Col sm={12}>
              <Form.Group controlId="phone-number">
                <Form.Label className="block text-sm font-semibold leading-6 text-gray-900">
                  Phone number
                </Form.Label>
                <div className="input-group">
                  <Form.Control
                    as="select"
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-2 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                    <option>PK</option>
                    <option>IND</option>
                    <option>AUS</option>
                  </Form.Control>
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="Enter your Phone number"
                    value={user.phone}
                    onChange={getUserData}
                    id="phone-number"
                  />
                </div>
              </Form.Group>
            </Col>
            <Col sm={12}>
              <Form.Group controlId="message">
                <Form.Label className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Enter your Message"
                  value={user.message}
                  onChange={getUserData}
                  rows="4"
                />
              </Form.Group>
            </Col>
            <Col sm={12} className="d-flex gap-3 mt-4">
              <div className="flex h-6 items-center"></div>
            </Col>
          </Row>
          <div className="mt-4">
            <Button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={postData}
            >
              Let's talk
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Contact;
