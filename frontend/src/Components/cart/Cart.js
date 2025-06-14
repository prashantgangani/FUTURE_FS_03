import React, { useContext, useEffect, useState } from 'react'
import "./cart.css";
import { Divider } from '@mui/material';
import { useHistory, useParams } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
import { Logincontext } from "../context/Contextprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const { account, setAccount } = useContext(Logincontext);
    const { id } = useParams("");
    const history = useHistory();
    const [inddata, setIndedata] = useState("");
    const [loading, setLoading] = useState(true);

    const getinddata = React.useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch(`/getproductsone/${id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();

            if (res.status !== 201) {
                toast.error("Product not available", {
                    position: "top-center"
                });
                history.push("/");
            } else {
                setIndedata(data);
            }
        } catch (error) {
            toast.error("Error loading product", {
                position: "top-center"
            });
            console.error("Error fetching product:", error);
        } finally {
            setLoading(false);
        }
    }, [id, history]);

    useEffect(() => {
        getinddata();
    }, [getinddata]);

    const addtocart = async (id) => {
        if (!account) {
            toast.info("Please login to add items to cart", {
                position: "top-center"
            });
            history.push("/login");
            return;
        }

        if (!inddata) {
            toast.error("Product data not available", {
                position: "top-center"
            });
            return;
        }

        try {
            setLoading(true);
            const check = await fetch(`/addcart/${id}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    inddata
                }),
                credentials: "include"
            });

            const data1 = await check.json();

            if (check.status === 401) {
                toast.error("Please login to add items to cart", {
                    position: "top-center"
                });
                history.push("/login");
                return;
            }

            if (check.status !== 201) {
                toast.error(data1.error || "Failed to add item to cart", {
                    position: "top-center"
                });
                return;
            }

            setAccount(data1);
            toast.success("Item added to cart successfully!", {
                position: "top-center"
            });
            history.push("/buynow");
        } catch (error) {
            console.error("Error adding to cart:", error);
            toast.error("Network error. Please try again", {
                position: "top-center"
            });
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className="cart_section">
                <div className="circle">
                    <CircularProgress />
                    <h2>Loading...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="cart_section">
            {inddata && Object.keys(inddata).length > 0 ? (
                <div className="cart_container">
                    <div className="left_cart">
                        <img src={inddata.detailUrl} alt="cart" />
                        <div className="cart_btn">
                            <button 
                                className="cart_btn1" 
                                onClick={() => addtocart(inddata.id)}
                                disabled={loading}
                            >
                                {loading ? "Adding..." : "Add to Cart"}
                            </button>
                            <button className="cart_btn2">Buy Now</button>
                        </div>
                    </div>
                    <div className="right_cart">
                        <h3>{inddata.title.shortTitle}</h3>
                        <h4>{inddata.title.longTitle}</h4>
                        <Divider />
                        <p className="mrp">M.R.P. : <del>₹{inddata.price.mrp}</del></p>
                        <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹{inddata.price.cost}.00</span></p>
                        <p>You save : <span style={{ color: "#B12704" }}> ₹{inddata.price.mrp - inddata.price.cost} ({inddata.price.discount}) </span></p>

                        <div className="discount_box">
                            <h5>Discount : <span style={{ color: "#111" }}>{inddata.discount}</span></h5>
                            <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
                            <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}>Tomorrow 11AM</span></p>
                        </div>
                        <p className="description">About the Item : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>{inddata.description}</span></p>
                    </div>
                </div>
            ) : (
                <div className="circle">
                    <CircularProgress />
                    <h2>Loading...</h2>
                </div>
            )}
            <ToastContainer />
        </div>
    )
}

export default Cart
