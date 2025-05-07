// Change the text content
function changeText() {
    document.getElementById("main-title").textContent = "You clicked the button!";
  }
  
  // Modify CSS styles
  function changeStyle() {
    const intro = document.getElementById("intro-text");
    intro.classList.toggle("highlight");
  }
  
  // Add a new list item
  function addItem() {
    const list = document.getElementById("dynamic-list");
    const newItem = document.createElement("li");
    newItem.textContent = "New item added!";
    list.appendChild(newItem);
  }
  
  // Remove the last list item
  function removeItem() {
    const list = document.getElementById("dynamic-list");
    if (list.lastElementChild) {
      list.removeChild(list.lastElementChild);
    }
  }
  