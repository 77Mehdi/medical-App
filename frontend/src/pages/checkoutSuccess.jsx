import React from 'react';
import { useNavigate } from 'react-router-dom';


function PaymentSuccess() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

 

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-10 text-center max-w-md">
    

        <h2 className="text-2xl font-bold text-green-500 mb-4">
          Payment Successful!
        </h2>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. Your payment has been successfully processed.
        </p>

    
        <div className="flex justify-center space-x-4">
          <button
            onClick={goToHome}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow"
          >
            Go To The Home Page
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
