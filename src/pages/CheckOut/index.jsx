import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/FireStore";
import TextField from "@mui/material/TextField";
import useCartContext from "../../CartContext/CartContext";
import "./Shop.css";

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  name: "",
  lastName: "",
  city: "",
};

const CheckOut = () => {
  const { clearCart } = useCartContext();
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "purchasesCollection"), {
        ...values,
      });
      setPurchaseID(docRef.id);
      setShowSuccessMessage(true);
      clearCart();
      setValues(initialState);
    } catch (error) {
      console.error("Error al agregar el documento:", error);
    }
  };

  return (
    <div style={styles.containerShop}>
      <h1 style={{ color: "white" }}>Checkout</h1>
      {showSuccessMessage ? (
        <div>
          <p>Your purchase ID: {purchaseID}</p>
          <button className="btnASendAction" onClick={() => setPurchaseID("")}>
            Make Another Purchase
          </button>
        </div>
      ) : (
        <form className="FormContainer" onSubmit={onSubmit}>
          <TextField
            placeholder="Name"
            style={{ margin: 10, width: 400 }}
            name="name"
            value={values.name}
            onChange={handleOnChange}
          />
          <TextField
            placeholder="Last Name"
            style={{ margin: 10, width: 400 }}
            name="lastName"
            value={values.lastName}
            onChange={handleOnChange}
          />
          <TextField
            placeholder="City"
            style={{ margin: 10, width: 400 }}
            name="city"
            value={values.city}
            onChange={handleOnChange}
          />
          <button className="btnASendAction" type="submit">
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckOut;
