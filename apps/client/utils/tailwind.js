// tailwind.js
export function tw(...classes) {
  return classes.filter(Boolean).join(' ');
}
