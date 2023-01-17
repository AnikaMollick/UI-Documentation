import './Links.css';
export const createLink =({
    size,
    backgroundColor,
    label,
    icon,
}) =>{
    const link = document.createElement('link');
    link.type = 'link';
    link.innerText = label;
    link.className = ['storybook-link', `storybook-link--${size}`,`storybook-link--${icon}`].join(' ');
    link.style.backgroundColor = backgroundColor;

  return link;
}