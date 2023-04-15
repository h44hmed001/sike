import HomeBanners from "@/components/HomeBanners";
import ProductGallery from "@/components/ProductGallery";
import Carousel from "@/components/Carousel";



export default function Home() {
  return (
    <div>
      <HomeBanners subtitle="Showcase your whole family's look with the Air Max 97 SE and other iconic styles." heading="Style On Blast" CompUrl={"https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1487,c_limit/d83ef844-3099-477e-863e-470b73d4b84a/nike-just-do-it.jpg"} MobileUrl={"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_584,c_limit/76b095fe-780f-4ce6-ad88-050d83dcd055/nike-just-do-it.jpg"}/>

      <HomeBanners mainHeading="Shine Season" subtitle="inspired by the icons and moments that paved the way for W." heading="WNBA REBEL EDITION JERSEY" CompUrl={"https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1487,c_limit/64a81b8e-941f-4d2a-9c0f-68e556fe574c/nike-just-do-it.jpg"} MobileUrl={"https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_420,c_limit/159cccec-cb47-4458-92ad-34a080129bbf/nike-just-do-it.jpg"}/>
      <Carousel heading="Little Sneak Peek" Image={[{image:"https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/f0a04bde-ca73-405e-a895-eba7fc7cf2f2/nike-just-do-it.jpg"},{image:"https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/495e355e-017e-44dc-a9ee-6cd11899763f/nike-just-do-it.jpg"},{image:"https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/8d5cabf7-8185-471f-84d2-a89403b6d3eb/nike-just-do-it.jpg"},{image:"https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/15cdc7b5-6de0-4d5c-81e9-6d01fc944b18/nike-just-do-it.jpg"},{image:"https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/465c9f08-2432-4b35-bcd8-5a8cbc29df34/nike-just-do-it.jpg"}]} />
      <ProductGallery mainHeading="Sike Swim Essentials" Data={[
        
    {image:"https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_620,c_limit/269524b1-553a-4f20-9e21-c6ef58269288/nike-just-do-it.jpg",subtitle:"Mens"},
    {image:"https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_620,c_limit/bc998005-ba41-4ed6-8875-cce5f3e693be/nike-just-do-it.jpg",subtitle:"Kids"},
    {image:"https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_620,c_limit/38d697af-51b3-4d62-8c1d-c4feba5e6104/nike-just-do-it.jpg",subtitle:"Women"},
]}  />

    </div>
  )
}
