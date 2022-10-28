interface ButtonProps {
  cor?: 'green' | 'blue' | 'gray'
  children: any
  className?: string
  onClick?: () => void
}

export function Button(props: ButtonProps){
  const cor = props.cor ?? 'gray'
  return (
    <button 
    onClick={props.onClick}
    className={`
      px-4 py-2 rounded-md 
      bg-gradient-to-r from-${cor}-400 to-${cor}-700
      text-white
      ${props.className}
     `}>
      {/* {console.log(cor)} */}
      {props.children}
    </button>
  )
}