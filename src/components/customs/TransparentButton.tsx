interface ChildProps {
  content: string;
  handleTodo: () => void;
  icon?: React.ReactNode;
}

const TransparentButton: React.FC<ChildProps> = ({
  content,
  handleTodo,
  icon,
}) => {
  return (
    <button
      onClick={handleTodo}
      className="flex items-center justify-center w-full gap-2 px-4 py-2 border border-[#e11d48] rounded-lg bg-white text-[#e11d48]
           hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
    >
      {icon && <span>{icon}</span>}
      <span>{content}</span>
    </button>
  );
};

export default TransparentButton;
