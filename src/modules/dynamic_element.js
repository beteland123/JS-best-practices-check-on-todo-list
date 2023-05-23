import del from '../delete.jpeg';
import more from '../more.png';
import recycle from '../recycle.png';
import left from '../to-left.png';

const createListMarkup = (description, id, completed) => {
  const listDiv = document.createElement('div');
  listDiv.classList.add('eachList');
  listDiv.innerHTML = `
    <div class="left">
      <input type="checkbox" id="check-${id}" ${completed ? 'checked' : ''}>
      <span class="des ${completed ? 'completed' : ''}" contenteditable="true" data-id="${id}">${description}</span>
    </div>
    <img class="more" src="${more}" alt="more" data-id="${id}">
    <img class="removebtn" src="${del}" alt="remove" style="display:none;" data-id="${id}">
  `;
  return listDiv;
};

const content = () => {
  const container = document.querySelector('.container');
  const element = document.createElement('div');
  element.id = 'list_elemnt';
  element.innerHTML = `<p>Today's To Do</p> <img class="refresh" src="${recycle}" alt="refresh page">`;
  const input = document.createElement('div');
  input.id = 'input_div';
  input.innerHTML = `<input class="inputSpace" placeholder="Add to your list..."><img class="clear" src="${left}" alt="clear">`;

  container.appendChild(element);
  container.appendChild(input);
  return container;
};

export { createListMarkup, content };