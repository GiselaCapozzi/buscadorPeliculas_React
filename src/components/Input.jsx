export const Input = ({
  type,
  className,
  value,
  onChange,
  name,
  placeholder
}) => {

  return (
    <input
      type={type}
      className={className}
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
    />
  )
}
