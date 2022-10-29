interface Props{
  children: any;
 }

export function Container(props: Props) {
  return (
    <div
      className=" 
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
      text-white"
    >
      {props.children}
    </div>
  );
}
