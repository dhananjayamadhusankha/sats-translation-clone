"use client";

function CheckoutButton() {
  const createCheckoutSession = async () => {
    // push a documment into firestore db

    // ... stripe extension on firebase will create a checkout session

    // redirect user to checkout page
  };
  return (
    <div>
      {/* if subcribed show me the user is subcribed */}

      <button
        onClick={() => createCheckoutSession()}
        className="mt-8 bg-indigo-600 rounded-md text-center py-3 text-white font-semibold leading-6 cursor-pointer shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-80 block w-full"
      >
        Sign Up
      </button>
    </div>
  );
}

export default CheckoutButton;
