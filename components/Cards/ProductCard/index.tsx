import PrimaryButton from "@/components/Buttons/Primary"
import Image from "next/image"

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-lg">
      <div className="flex justify-center">
        <Image
          priority
          width={200}
          height={200}
          src={product.image}
          alt={product.title}
          className="h-48 w-48 object-contain"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-700">{product.title}</h2>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-semibold text-gray-700">€{product.price}</span>
          <div className="flex items-center">
            <span className="text-yellow-400">★ {product.rating.rate}</span>
            <span className="ml-2 text-gray-400">({product.rating.count})</span>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <PrimaryButton type="button">BUY</PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
