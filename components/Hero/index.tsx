import React from "react"

function Hero({ title, description }: { title: string; description: string }) {
  return (
    <section className="flex w-full flex-col items-center">
      <div className="mx-20 flex w-full max-w-screen-2xl flex-col items-center justify-between gap-5 py-28 text-center">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="w-[600px] text-lg">{description}</p>
      </div>
    </section>
  )
}

export default Hero
