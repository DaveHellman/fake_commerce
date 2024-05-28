import Image from "next/image"

function Brand() {
  return (
    <div className="flex w-40 items-center gap-3">
      <Image
        priority
        src="/logo.svg"
        width={42}
        height={42}
        alt="Fake Commerce logo"
      />
      <h1 className="text-2xl font-bold text-black">BrandName</h1>
    </div>
  )
}

export default Brand
