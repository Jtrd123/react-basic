import type { CSSProperties } from 'react'

interface ButtonProps {
  title: string
  color: string
  updateCount: () => void
}

const Button = ({title, color, updateCount}: ButtonProps) => {
  const buttonStyle = {
    '--btn-accent': color,
  } as CSSProperties

  return (
    <>
      <button className="custom-btn" style={buttonStyle} onClick={updateCount}>
        {title}
      </button>
    </>
  )
}
export default Button