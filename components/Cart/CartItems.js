"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { deleteProduct, toggleAmount } from "@/redux/action/CartAction";

const CartItems = ({ id, product, amount }) => {
  const dispatch = useDispatch();

  const increasePrice = () => {
    dispatch(toggleAmount(id, "inc"));
  };
  const decreasePrice = () => {
    dispatch(toggleAmount(id, "dec"));
  };

  return (
    <tr>
      <td className="pro-thumbnail">
        <Link
          href={
            product.productType
              ? `/single-product/${id}`
              : product.title
              ? `/event-details/${id}`
              : `/course-details/${id}`
          }
        >
          <Image
            src={product.courseImg || product.eventImg}
            width={140}
            height={111}
            alt="Product"
          />
        </Link>
      </td>
      <td className="pro-title">
        <Link
          href={
            product.productType
              ? `/single-product/${id}`
              : product.title
              ? `/event-details/${id}`
              : `/course-details/${id}`
          }
        >
          {product.courseTitle || product.title}
        </Link>
      </td>
      <td className="pro-price">
        <span>${product.price}.00</span>
      </td>
      <td className="pro-quantity">
        <div className="pro-qty">
          <span className="dec qtybtn" onClick={decreasePrice}>
            -
          </span>
          <span>{amount}</span>
          <span className="inc qtybtn" onClick={increasePrice}>
            +
          </span>
        </div>
      </td>
      <td className="pro-subtotal">
        <span>${product.price * amount}.00</span>
      </td>
      <td className="pro-remove">
        <Link href="#" onClick={() => dispatch(deleteProduct(id))}>
          <i className="feather-x"></i>
        </Link>
      </td>
    </tr>
  );
};

export default CartItems;
