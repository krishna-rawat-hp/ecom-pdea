
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Form } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './signup.css';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../config/FirebaseConfig';
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { setUser } from '../store/auth-slice';

function SignUp() {

    const [error, setError] = useState("");
    const [number, setNumber] = useState("");
    const [flag, setFlag] = useState(false);
    const [otp, setOtp] = useState("");
    const [result, setResult] = useState("");
    const [captchaFlag, setCaptchaFlag] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function setUpRecaptcha(number) {
        setCaptchaFlag(true);
        const recaptchaVerifier = new RecaptchaVerifier(
            auth,
            "recaptcha-container",
            {}
        );
        recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVerifier);
    }

    const getOtp = async (e) => {
        e.preventDefault();
        console.log(number);
        setError("");
        if (number === "" || number === undefined)
            return setError("Please enter a valid phone number!");
        try {
            var phoneNo = "+" + number;
            console.log(phoneNo);
            const response = await setUpRecaptcha(phoneNo);
            setResult(response);
            setFlag(true);
            setCaptchaFlag(false);
        } catch (err) {
            setError(err.message);
        }
    }

    const verifyOtp = async (e) => {
        e.preventDefault();
        setError("");
        if (otp === "" || otp === null) return;
        try {
            const response = await result.confirm(otp);
            dispatch(setUser(response.user.toJSON()));
            toast.success("login success !!")
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className='box-container'>
            <div className='box'>
                <h2 className="mb-3 login-heading">Login</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <PhoneInput
                            country={'in'}
                            value={number}
                            onChange={setNumber}
                            placeholder="Enter Phone Number"
                            inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true
                            }}
                        />
                        <div id="recaptcha-container"></div>
                    </Form.Group>
                    <div className="button-right">
                        <a href="/">
                            <Button className="btn-box btn-cancel">Cancel</Button>
                        </a>
                        &nbsp;
                        <Button className="btn-box btn-otp" type="submit" disabled={captchaFlag}>
                            Send OTP
                        </Button>
                    </div>
                </Form>

                <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
                    <Form.Group className="mb-3" controlId="formBasicOtp">
                        <Form.Control
                            type="otp"
                            className='otp-input'
                            placeholder="Enter OTP"
                            onChange={(e) => setOtp(e.target.value)}
                        />
                    </Form.Group>
                    <div className="button-right">
                        <a href="/">
                            <Button className="btn-box btn-cancel" variant="secondary">Cancel</Button>
                        </a>
                        &nbsp;
                        <Button className="btn-box btn-otp" type="submit" variant="primary">
                            Verify
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default SignUp