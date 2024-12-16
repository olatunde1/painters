// function displayAction() {
//     // Get the selected option value
//     const selectedAction = document.getElementById("actionSelect").value;
    
//     // Get the element where the action will be displayed
//     const serviceForm = document.getElementById("serviceFormS");
    
//     // Check if a valid action was selected
//     if (selectedAction) {
//         serviceForm.innerHTML = `You selected the action: ${selectedAction}. Now, proceed to the next step.`;
//     } else {
//         serviceForm.innerHTML = "Please select an action from the dropdown.";
//     }
// }


// function displayAction() {
//     const selectElement = document.getElementById("stateSelection");
//     const selectedValue = selectElement.value;

//     const actionDisplay = document.getElementById("actionDisplay");

//     switch (selectedValue) {
//       case "option1":
//         actionDisplay.textContent = "You selected Option 1. The next action is to...";
//         break;
//       case "option2":
//         actionDisplay.textContent = "You selected Option 2. The next action is to...";
//         break;
//       case "option3":
//         actionDisplay.textContent = "You selected Option 3. The next action is to...";
//         break;
//       default:
//         actionDisplay.textContent = "Please select an option.";
//     }
//   }
function loadNextPage() {
    const selectElement = document.getElementById("mySelect");
    const selectedPage = selectElement.value;
  
    const pageContainer = document.getElementById("pageContainer");
  
    // Create a new XMLHttpRequest object to fetch the page
    const xhr = new XMLHttpRequest();
    xhr.open('GET', selectedPage, true);
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        pageContainer.innerHTML = xhr.responseText;
      } else {
        console.error('Request failed.  Returned status of ' + xhr.status);
      }
    };
  
    xhr.send();
  }