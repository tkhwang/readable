import styled from 'styled-components';
import 'tailwindcss/tailwind.css';

/* eslint-disable-next-line */
export interface ButtonProps {}



export function Button(props: ButtonProps) {
  return (
    <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
    Click me
  </button>
  );
}

export default Button;
