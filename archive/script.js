function openLink(linkType) {
  const link = linkType === 'categories-0' ? 'https://11111111u.github.io' : 'https://11111111u.github.io';
  window.location.href = link;
}



// Disable right-click context menu
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
// // Disable text selection
// document.addEventListener('selectstart', function (e) {
//   e.preventDefault();
// });



// localStorage.clear = function() {};

class EditableTable {
  constructor(table) {
    this.table = table;
    this.loadTableContent();
    this.addInputListener();
  }

  addInputListener() {
    this.table.addEventListener('input', () => {
      this.saveTableContent();
    });
  }

  saveTableContent() {
    const tableContent = this.table.innerHTML;
    localStorage.setItem(`${this.table.id}-content`, tableContent);
  }

  loadTableContent() {
    const savedContent = localStorage.getItem(`${this.table.id}-content`);
    if (savedContent) {
      this.table.innerHTML = savedContent;
    }
  }
}

const table1 = new EditableTable(document.getElementById('editableTable1'));
const table2 = new EditableTable(document.getElementById('editableTable2'));




  localStorage.clear();