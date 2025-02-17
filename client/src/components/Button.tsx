interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }
  
  const Button = ({ children, onClick, className = "" }: ButtonProps) => {
    return (
      <button 
        onClick={onClick}
        className={`bg-black text-white px-4 py-2 rounded-2xl cursor-pointer ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;