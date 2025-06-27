/**
 * @typedef {Object} ButtonProps
 * @property {string} [variant] - Button variant: 'primary', 'secondary', 'outline', 'ghost'
 * @property {string} [size] - Button size: 'sm', 'md', 'lg'
 * @property {boolean} [disabled] - Whether the button is disabled
 * @property {string} [className] - Additional CSS classes
 * @property {React.ReactNode} children - Button content
 * @property {Function} [onClick] - Click handler function
 * @property {string} [type] - Button type: 'button', 'submit', 'reset'
 */

/**
 * Reusable Button component with Tailwind CSS styling
 * @param {ButtonProps} props - Button properties
 * @returns {JSX.Element} Button component
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  children,
  onClick,
  type = 'button',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-gray-300 disabled:text-gray-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 disabled:bg-gray-300 disabled:text-gray-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-red-500 disabled:border-gray-200 disabled:text-gray-400',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-red-500 disabled:text-gray-400'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
} 