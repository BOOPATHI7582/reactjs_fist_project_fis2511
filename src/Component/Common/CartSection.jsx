const CartSection = ({ number, text }) => {
  return (
    <div className='bg-gradient-to-r from-[#223c81] via-[#149bd7] to-[#169bd7] rounded shadow-[9px_10px_0px_3px_rgba(59,_130,_246,_0.5)] px-4  w-2/3 flex-col h-auto lg:h-[100px] '>
      <h3 className='text-white font-extrabold font-stretch-95% text-3xl text-center'>{number}+</h3>
      <p className='text-white font-bold text-xl text-center'>{text}</p>
    </div>
  );
};

export default CartSection