export interface ButtonProps {
  children: string;
  isActive?: boolean;
}

export function Button({ children, isActive }: ButtonProps) {
  return (
    <button
      className={`py-2 px-4 text-xs rounded-3xl ${
        isActive ? 'bg-indigo-600 hover:bg-indigo-800' : 'bg-black hover:bg-indigo-600'
      } `}
    >
      {children}
    </button>
  );
}
