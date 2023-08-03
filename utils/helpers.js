export const getDiscountPercentage=(discountedPrice,originalPrice)=>{
    const discount=originalPrice-discountedPrice

    return Math.floor((discount/originalPrice)*100)
}