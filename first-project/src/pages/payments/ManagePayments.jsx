// import { SET_USER } from '../redux/actions';
import { CREDIT_PACKS } from '../../payments';
import { useState } from 'react';
import axios from 'axios';
// import { serverEndpoint } from '../config';
import { useDispatch, useSelector } from 'react-redux';
// import Subscription from '../pages/payments/Subscription';
// import PurchaseCredit from '../pages/payments/PurchaseCredit';
import { SET_USER } from '../../redux/actions';
import { serverEndpoint } from '../../config';
import Subscription from './Subscription';
import PurchaseCredit from './PurchaseCredit';


function ManagePayments() {
    
     const userDetails=useSelector((state)=>state.userDetails);

    if(userDetails.subscription?.status === 'active'){
        return <Subscription/>;
    }else{
        return <PurchaseCredit/>;
    }
    // const user = useSelector((state) => state.userDetails);
    const [error, setError] = useState({});
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handlePayment = async (credits) => {
        try {
            setError({});
            setMessage(null);
            setLoading(true);

            // Step 1: Create Razorpay order
            const { data } = await axios.post(
                `${serverEndpoint}/payments/create-order`,
                { credits },
                { withCredentials: true }
            );

            const order = data.order;

            // Step 2: Define Razorpay options
            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Ensure this env variable is set
                amount: order.amount,
                currency: order.currency,
                name: 'AffiGlow',
                description: `${credits} Credits pack`,
                order_id: order.id,
                theme: {
                    color: '#3399cc',
                },
                handler: async (payment) => {
                    try {
                        const verifyResponse = await axios.post(
                            `${serverEndpoint}/payments/verify-order`,
                            {
                                razorpayPaymentId: payment.razorpay_payment_id,
                                razorpayOrderId: payment.razorpay_order_id,
                                razorpaySignature: payment.razorpay_signature,
                                credits,
                            },
                            { withCredentials: true }
                        );

                        const updatedUser = verifyResponse.data.user;

                        dispatch({
                            type: SET_USER,
                            payload: updatedUser,
                        });

                        setMessage({ message: 'Credits added successfully!' });
                    } catch (err) {
                        console.error(err);
                        setError({
                            message: 'Unable to verify payment. If money was deducted, please contact support.',
                        });
                    }
                },
            };

            // Step 3: Open Razorpay payment gateway
            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (err) {
            console.error(err);
            setError({
                message: 'Unable to complete payment. Please try again later.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container py-5">
            {message && (
                <div className="alert alert-success" role="alert">
                    {message.message}
                </div>
            )}
            {error.message && (
                <div className="alert alert-danger" role="alert">
                    {error.message}
                </div>
            )}
            <h2>Manage Payments</h2>
            <p>
                <strong>Credit Balance:</strong> {user.credits}
            </p>

            <div className="row">
                {CREDIT_PACKS.map((credits) => (
                    <div key={credits} className="col-auto border m-2 p-2">
                        <h4>{credits} Credits</h4>
                        <p>Buy {credits} Credits for ₹{credits}</p>
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => handlePayment(credits)}
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : 'Pay'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ManagePayments;
