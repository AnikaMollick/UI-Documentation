import './button.css';

export const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  secondary,
  onClick,
  icon,
  type='default',
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);
  const mode = primary ? 'storybook-button--primary' : secondary? 'storybook-button--secondary': 'storybook-button--tertiary';
  btn.className = ['storybook-button', `storybook-button--${size}`, `storybook-button--${type}--${mode}`,mode,`storybook-button--${icon}`].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
