export function HeaderCart() {
  return (
    <div className="w-full h-[4.5rem] grid grid-cols-4  text-base font-regular shadow-sm items-center ">
      <p className="text-start px-2 font-medium">Product</p>
      <p className="text-center px-2 font-medium">Price</p>
      <p className="text-center px-2 font-medium">Quantity</p>
      <p className="text-end px-2 font-medium">SubTotal</p>
    </div>
  )
}
