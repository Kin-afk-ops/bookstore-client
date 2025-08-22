interface ChildProps {
  content: string;
  handleTodo?: () => void;
  icon?: React.ReactNode;
  asChild?: boolean; // Nếu là true, thì không gán onClick
  type?: "button" | "submit" | "reset";
}

const TransparentButton: React.FC<ChildProps> = ({
  content,
  handleTodo,
  icon,
  asChild = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={!asChild && handleTodo ? () => handleTodo() : undefined}
      className="flex items-center justify-center w-full gap-2 px-4 py-2 border border-[var(--primary)] rounded-lg bg-white text-[var(--primary)]
           hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
    >
      {icon && <span>{icon}</span>}
      <span>{content}</span>
    </button>
  );
};

export default TransparentButton;
