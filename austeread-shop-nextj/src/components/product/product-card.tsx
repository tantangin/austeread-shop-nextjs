import { AppInterface } from "@/commons/interface/app";
import Image from "next/image";
import { useState } from "react";

type Props = {
  product: AppInterface.ProductKeranjangs;
};
export default function ProductCard({ product }: Props) {
  const [qty, setQty] = useState(product.qty);
  if (qty < 1) return <></>;
  return (
    <div className="product-card flex gap-2">
      <div className="product-card-image w-[89px]">
        <Image width={89} height={89} style={{ width: "auto", height: "auto" }} src="/static/product-image.jpg" alt="image" className="!w-[89px]" />
      </div>
      <div className="product-card-detail">
        <div className="product-nama font-bold text-lg">Austeread x Jane Doe</div>
        <div className="product-harga text-gray-800 text-base">Rp. 100.000</div>
        <div className="product-variant text-gray-500">Size : L</div>
        <div className="product-card-action flex items-center gap-2">
          <button className="outline-none p-2 font-bold" onClick={() => setQty(qty - 1)}>
            -
          </button>
          <span className="">{qty}</span>
          <button className="outline-none p-2  font-bold" onClick={() => setQty(qty + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
