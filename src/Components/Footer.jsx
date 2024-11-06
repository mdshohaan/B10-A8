// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-center p-8 ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold">Gadget Heaven</h2>
        <p className="text-gray-600 mt-2">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 border-t py-10">
          <div>
            <h3 className="font-semibold text-gray-900">Services</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
