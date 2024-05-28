interface PrimaryButtonProps {
  type: "button" | "submit" | "reset"
  children: React.ReactNode
  className?: string
}

function PrimaryButton({ type, children, className }: PrimaryButtonProps) {
  return (
    <button
      type={type}
      className={`flex h-12 w-20 items-center justify-center bg-black p-2 font-bold text-white ${className}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
