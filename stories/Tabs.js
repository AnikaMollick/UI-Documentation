import './Tabs.css';
export const createTabs =({
    size,
    backgroundColor,
    label,
    icon,
    primary,
    secondary,
    onClick
}) =>{
    const tabs = document.createElement('tabs');
    tabs.type = 'tabs';
    tabs.innerText = label;
    tabs.addEventListener('click', onClick);
    const mode = primary ? 'storybook-tabs--primary':'storybook-tabs--secondary';
    tabs.className = ['storybook-tabs', `storybook-tabs--${size}`,mode].join(' ');
    tabs.style.backgroundColor = backgroundColor;

  return tabs;
}