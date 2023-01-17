
import './Tags.css';
export const createTags =({
    backgroundColor,
    label,
    variant,
    primary,
    secondary,
    onClick
}) =>{
    const tags = document.createElement('tags');
    tags.type = 'tags';
    tags.innerText = label;
    tags.addEventListener('click', onClick);
    const mode = primary ? 'storybook-tags--primary':'storybook-tags--secondary';
    tags.className = ['storybook-tags', `storybook-tags--${variant}`,mode].join(' ');
    tags.style.backgroundColor = backgroundColor;

  return tags;
}