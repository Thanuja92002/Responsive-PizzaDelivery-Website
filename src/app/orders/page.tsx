import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">30.07.2023</td>
            <td className="py-6 px-1">₹502.0</td>
            <td className="hidden md:block py-6 px-1">farmhouse (2), chicken Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1 text-green-300 font-bold">Delivered</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12378617212346</td>
            <td className="py-6 px-1">30.07.2023</td>
            <td className="py-6 px-1">₹899.0</td>
            <td className="hidden md:block py-6 px-1">combo pizza (2), Veggie Pizza (2)</td>
            <td className="py-6 px-1 text-red-500 font-bold">Cancelled</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238786</td>
            <td className="py-6 px-1">30.07.2023</td>
            <td className="py-6 px-1">₹1,899.0</td>
            <td className="hidden md:block py-6 px-1">Big Menu (2), Veggie classicPizza (2) (2)</td>
            <td className="py-6 px-1 text-green-300 font-bold ">Delivered</td>
          </tr>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">peporoni Menu (2), Pizza (2)</td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">italian Menu (2), cheese pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1">Delayed...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
          

        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
