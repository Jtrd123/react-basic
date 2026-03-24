interface FooterProps {
  counter: number
}

const Footer = ({ counter }: FooterProps) => {
  return (
    <div>{counter}</div>
  )
}
export default Footer