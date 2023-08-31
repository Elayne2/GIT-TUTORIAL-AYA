const colorGrid = document.getElementById('color-grid');
const colors = ['pink','red','orange','yellow','green','lightblue','blue','purple','grey', 'black'];

for (let i = 0; i < 100; i++) {
  const colorCell = document.createElement('div');
  colorCell.className = 'color-cell';

  colorCell.addEventListener('click', function() {
    const selectedColor = document.querySelector('.selected');
    if (selectedColor) {
      selectedColor.classList.remove('selected');
    }
    colorCell.classList.add('selected');
  });

  colorCell.style.backgroundColor = colors[i % colors.length];
  colorGrid.appendChild(colorCell);
}

let isDrawing = false;

colorGrid.addEventListener('mousedown', function() {
  isDrawing = true;
});

colorGrid.addEventListener('mouseup', function() {
  isDrawing = false;
});

colorGrid.addEventListener('mouseover', function(event) {
  if (isDrawing && event.target.classList.contains('color-cell')) {
    const selectedColor = document.querySelector('.selected');
    if (selectedColor) {
      event.target.style.backgroundColor = selectedColor.style.backgroundColor;
    }
  }
});