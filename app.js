const keys = [
  { code: 'Backquote', ru: [']', '['], en: ['`', '~'] },
  { code: 'Digit1', ru: ['1', '!'], en: ['1', '!'] },
  { code: 'Digit2', ru: ['2', '"'], en: ['2', '@'] },
  { code: 'Digit3', ru: ['3', '№'], en: ['3', '#'] },
  { code: 'Digit4', ru: ['4', '%'], en: ['4', '$'] },
  { code: 'Digit5', ru: ['5', ':'], en: ['5', '%'] },
  { code: 'Digit6', ru: ['6', ','], en: ['6', '^'] },
  { code: 'Digit7', ru: ['7', '.'], en: ['7', '&'] },
  { code: 'Digit8', ru: ['8', ';'], en: ['8', '*'] },
  { code: 'Digit9', ru: ['9', '('], en: ['9', '('] },
  { code: 'Digit0', ru: ['0', ')'], en: ['0', ')'] },
  { code: 'Minus', ru: ['-', '_'], en: ['-', '_'] },
  { code: 'Equal', ru: ['=', '+'], en: ['=', '+'] },
  { code: 'Backspace', ru: ['delete', 'delete'], en: ['delete', 'delete'] },
  { code: 'Tab', ru: ['tab', 'tab'], en: ['tab', 'tab'] },
  { code: 'KeyQ', ru: ['й', 'Й'], en: ['q', 'Q'] },
  { code: 'KeyW', ru: ['ц', 'Ц'], en: ['w', 'W'] },
  { code: 'KeyE', ru: ['у', 'У'], en: ['e', 'E'] },
  { code: 'KeyR', ru: ['к', 'К'], en: ['r', 'R'] },
  { code: 'KeyT', ru: ['е', 'Е'], en: ['t', 'T'] },
  { code: 'KeyY', ru: ['н', 'Н'], en: ['y', 'Y'] },
  { code: 'KeyU', ru: ['г', 'Г'], en: ['u', 'U'] },
  { code: 'KeyI', ru: ['ш', 'Ш'], en: ['i', 'I'] },
  { code: 'KeyO', ru: ['щ', 'Щ'], en: ['o', 'O'] },
  { code: 'KeyP', ru: ['з', 'З'], en: ['p', 'P'] },
  { code: 'BracketLeft', ru: ['х', 'Х'], en: ['[', '{'] },
  { code: 'BracketRight', ru: ['ъ', 'Ъ'], en: [']', '}'] },
  { code: 'Backslash', ru: ['ё', 'Ё'], en: ['\\', '|'] },
  { code: 'CapsLock', ru: ['caps lock', 'caps lock'], en: ['caps lock', 'caps lock'] },
  { code: 'KeyA', ru: ['ф', 'Ф'], en: ['a', 'A'] },
  { code: 'KeyS', ru: ['ы', 'Ы'], en: ['s', 'S'] },
  { code: 'KeyD', ru: ['в', 'В'], en: ['d', 'D'] },
  { code: 'KeyF', ru: ['а', 'А'], en: ['f', 'F'] },
  { code: 'KeyG', ru: ['п', 'П'], en: ['g', 'G'] },
  { code: 'KeyH', ru: ['р', 'Р'], en: ['h', 'H'] },
  { code: 'KeyJ', ru: ['о', 'О'], en: ['j', 'J'] },
  { code: 'KeyK', ru: ['л', 'Л'], en: ['k', 'K'] },
  { code: 'KeyL', ru: ['д', 'Д'], en: ['l', 'L'] },
  { code: 'Semicolon', ru: ['ж', 'Ж'], en: [';', ':'] },
  { code: 'Quote', ru: ['э', 'Э'], en: ['\'', '"'] },
  { code: 'Enter', ru: ['return', 'return'], en: ['return', 'return'] },
  { code: 'ShiftLeft', ru: ['shift', 'shift'], en: ['shift', 'shift'] },
  { code: 'KeyZ', ru: ['я', 'Я'], en: ['z', 'Z'] },
  { code: 'KeyX', ru: ['ч', 'Ч'], en: ['x', 'X'] },
  { code: 'KeyC', ru: ['с', 'С'], en: ['c', 'C'] },
  { code: 'KeyV', ru: ['м', 'М'], en: ['v', 'V'] },
  { code: 'KeyB', ru: ['и', 'И'], en: ['b', 'B'] },
  { code: 'KeyN', ru: ['т', 'Т'], en: ['n', 'N'] },
  { code: 'KeyM', ru: ['ь', 'Ь'], en: ['m', 'M'] },
  { code: 'Comma', ru: ['б', 'Б'], en: [',', '<'] },
  { code: 'Period', ru: ['ю', 'Ю'], en: ['.', '>'] },
  { code: 'Slash', ru: ['/', '/'], en: ['/', '?'] },
  { code: 'ShiftRight', ru: ['shift', 'shift'], en: ['shift', 'shift'] },
  { code: 'ControlLeft', ru: ['control', 'control'], en: ['control', 'control'] },
  { code: 'AltLeft', ru: ['option', 'option'], en: ['option', 'option'] },
  { code: 'MetaLeft', ru: ['command', 'command'], en: ['command', 'command'] },
  { code: 'Space', ru: [' ', ' '], en: [' ', ' '] },
  { code: 'MetaRight', ru: ['command', 'command'], en: ['command', 'command'] },
  { code: 'AltRight', ru: ['option', 'option'], en: ['option', 'option'] },
  { code: 'ArrowLeft', ru: ['left arrow', 'left arrow'], en: ['left arrow', 'left arrow'] },
  { code: 'ArrowUp', ru: ['up arrow', 'up arrow'], en: ['up arrow', 'up arrow'] },
  { code: 'ArrowDown', ru: ['down arrow', 'down arrow'], en: ['down arrow', 'down arrow'] },
  { code: 'ArrowRight', ru: ['right arrow', 'right arrow'], en: ['right arrow', 'right arrow'] },
];

const body = document.getElementsByTagName('body')[0];

// Create header and textfield

const headerTop = document.createElement('h1');
const headerTopText = document.createTextNode('Keyboard (made on MAC)');
headerTop.appendChild(headerTopText);
body.appendChild(headerTop);

const textarea = document.createElement('textarea');
body.appendChild(textarea);

// Create event listener with highlighted button

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const keyCode = event.code;
  const button = document.getElementsByClassName(`${keyCode}`)[0];
  button.classList.add('push');
  for (const child of button.children) {
    if (child.className === 'active') {
      textarea.value += child.innerHTML;
    }
  }
});

document.addEventListener('keyup', (event) => {
  const keyCode = event.code;
  const button = document.getElementsByClassName(`${keyCode}`)[0];
  button.classList.remove('push');
});

// Create wrapping div for buttons

const div = document.createElement('div');
body.appendChild(div);

// Create buttons

for (const symbol of keys) {
  // Create button element
  const button = document.createElement('button');
  button.className = `${symbol.code}`;
  div.appendChild(button);
  // Create lowercase en
  const buttonDownEn = document.createElement('span');
  const buttonDownEnText = document.createTextNode(symbol.en[0]);
  buttonDownEn.appendChild(buttonDownEnText);
  buttonDownEn.className = 'active';
  // Create lowercase ru
  const buttonDownRu = document.createElement('span');
  const buttonDownRuText = document.createTextNode(symbol.ru[0]);
  buttonDownRu.appendChild(buttonDownRuText);
  buttonDownRu.className = 'hidden';
  // Create capital en
  const buttonUpEn = document.createElement('span');
  const buttonUpEnText = document.createTextNode(symbol.en[1]);
  buttonUpEn.appendChild(buttonUpEnText);
  buttonUpEn.className = 'hidden';
  // Create capital ru
  const buttonUpRu = document.createElement('span');
  const buttonUpRuText = document.createTextNode(symbol.ru[1]);
  buttonUpRu.appendChild(buttonUpRuText);
  buttonUpRu.className = 'hidden';
  // Append buttons to second div
  button.appendChild(buttonUpEn);
  button.appendChild(buttonUpRu);
  button.appendChild(buttonDownEn);
  button.appendChild(buttonDownRu);
  button.addEventListener('click', (event) => {
    const clickedButton = event.target;
    for (const child of clickedButton.children) {
      if (child.className === 'active') {
        textarea.value += child.innerHTML;
      }
    }
  });
}
