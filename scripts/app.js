// This file creates a styled box with the entered information and stacks it on top of previous boxes.
// Each box's data is an array: [inputText, checkmarkState]

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('infoForm');
    const displayArea = document.getElementById('boxesContainer');

    // Load existing boxes from localStorage
    loadBoxes();

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputData = document.getElementById('infoInput').value;
        if (inputData) {
            createBox([inputData, false], true);
            form.reset();
        }
    });

    function createBox(data, save) {
        const [text, checked] = data;
        const box = document.createElement('div');
        const boxText = document.createElement('p');
        const boxCheck = document.createElement('input');
        boxCheck.type = 'checkbox';
        boxCheck.className = 'checkbox';
        box.className = 'infoBox';
        boxText.textContent = text;
        boxCheck.checked = checked;

        // Strikethrough if checked
        boxText.style.textDecoration = checked ? 'line-through' : 'none';

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            deleteBoxFromLocalStorage(data);
            location.reload();
        });

        box.appendChild(boxCheck);
        box.appendChild(boxText);
        box.appendChild(deleteBtn);
        displayArea.prepend(box);

        boxCheck.addEventListener('change', () => {
            updateBoxCheckState(text, boxCheck.checked, boxText);
        });

        if (save) {
            saveBoxToLocalStorage([text, checked]);
        }
    }

    function saveBoxToLocalStorage(data) {
        let boxes = getBoxesFromLocalStorage();
        boxes.push(data);
        localStorage.setItem('infoBoxes', JSON.stringify(boxes));
    }

    function getBoxesFromLocalStorage() {
        const boxes = localStorage.getItem('infoBoxes');
        if (boxes) {
            return JSON.parse(boxes);
        }
        return [];
    }

    function loadBoxes() {
        const boxes = getBoxesFromLocalStorage();
        boxes.forEach(boxData => createBox(boxData, false));
    }

    function deleteBoxFromLocalStorage(data) {
        let boxes = getBoxesFromLocalStorage();
        boxes = boxes.filter(box => !(box[0] === data[0] && box[1] === data[1]));
        localStorage.setItem('infoBoxes', JSON.stringify(boxes));
    }

    function updateBoxCheckState(text, checked, boxTextElem) {
        let boxes = getBoxesFromLocalStorage();
        boxes = boxes.map(box =>
            box[0] === text ? [box[0], checked] : box
        );
        localStorage.setItem('infoBoxes', JSON.stringify(boxes));
        // Update strikethrough immediately
        boxTextElem.style.textDecoration = checked ? 'line-through' : 'none';
    }
});