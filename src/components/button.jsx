const Button = (props) => {
  return (
    <button className="flex justify-center w-10 h-10 rounded-lg bg-slate-400 text-white font-bold text-2xl cursor-pointer hover:bg-slate-600" onClick={props.onClick}>
      {props.opt}
    </button>
  );
};

export default Button;
