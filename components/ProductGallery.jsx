import React from "react";
import Wrapper from "./Wrapper";



const ProductGallery = ({mainHeading,Data}) => {
  return (
    <div className="productGallery mb-20">
      
      {mainHeading&&<Wrapper><span className=" font-oswald font-extrabold text-2xl">{mainHeading}</span></Wrapper>}
      <Wrapper className="grid grid-cols-1 md:grid-cols-3  mt-[20px] justify-center  gap-3">
      
        {Data.map((item)=>{
            return(<div className="flex flex-col gap-3">
            <img className="h-[550px] " src={item.image} />
            <span className="font-bold text-lg">{item.subtitle}</span>
          </div>)

        })}
      </Wrapper>
    </div>
  );
};

export default ProductGallery;
