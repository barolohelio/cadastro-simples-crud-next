import { clsx } from 'clsx';

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
    className={clsx(`
      px-4 py-2 rounded-md 
      text-white
      bg-gradient-to-r mb-4 from-${cor}-400 to-${cor}-700
      focus:outline-none focus:ring focus:ring-white-300 
      `,  
      props.className
     )}>
      {console.log(cor)} 
      {props.children}
    </button>
  )
}