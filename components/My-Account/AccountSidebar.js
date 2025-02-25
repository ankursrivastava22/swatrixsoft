import Link from "next/link";
import React from "react";

const AccountSidebar = () => {
  return (
    <>
      <div className="rbt-my-account-tab-button nav" role="tablist">
        <Link href="#dashboad" className="active" data-bs-toggle="tab">
          Dashboard
        </Link>
        <Link href="#orders" data-bs-toggle="tab">
          Orders
        </Link>
        <Link href="#download" data-bs-toggle="tab">
          Download
        </Link>
        <Link href="#payment-method" data-bs-toggle="tab">
          Payment Method
        </Link>

        <Link href="#address-edit" data-bs-toggle="tab">
          Address
        </Link>
        <Link href="#account-info" data-bs-toggle="tab">
          Account Details
        </Link>
        <Link href="/login">Logout</Link>
      </div>
    </>
  );
};

export default AccountSidebar;
