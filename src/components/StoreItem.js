import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "./formatCurrency";
const StoreItem = ({ id, name, price, img }) => {

  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  
  const quantity = getItemsQuantity(id);
  return (
    <Card classNme="h-100">
      <Card.Img
        src={img}
        variant="top"
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-4">{name}</span>
          <span className="fs-5 text-secondary me-2">
            {formatCurrency(price)}
          </span>
        </Card.Title>
        <div className="mt-h-auto">
          {quantity === 0 ? (
            <Button onClick={() => increaseCartQuantity(id)} className="w-100">
              Add To Cart
            </Button>
          ) : (
            <div className="d-flex align-items-center justify-content-between flex-column gap-3">
              <div className="d-flex align-items-center justify-content-center my-3">
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <span className="fs-3 mx-2">{quantity} in cart</span>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeItemFromCart(id)}
                variant="danger"
                size="sm"
              >
                remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
