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


function selectState(state) {
    document.getElementById('state').value = state;
    document.getElementById('stateSelection').classList.add('hidden');
    document.getElementById('serviceFormSection').classList.remove('hidden');
}

function generateCSRFToken() {
    return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
}

// document.getElementById('csrf_token').value = generateCSRFToken();
// document.cookie = "csrf_token=" + encodeURIComponent(document.getElementById('csrf_token').value) + "; SameSite=Strict; HttpOnly; Secure";

// document.getElementById('serviceForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const formData = new FormData(this);
//     const data = {};
//     formData.forEach((value, key) => data[key] = value);

//     if (!data.name || !data.email || !data.location || !data.serviceType || !data.budget || !data.commencementDate || !data.details || !data.state) {
//         alert('Please fill in all fields');
//         return;
//     }

//     data.email = data.email.replace(/[^\w\s@.-]/gi, '');

//     console.log('Sending:', data);

//     // Here you would typically send this data to a server for processing
//     alert('Your request has been sent successfully!');
//     this.reset();
// });



function submitAction() {
    // Get the selected option value
    const selectedPage = document.getElementById("actionSelect").value;

    // Check if a valid page was selected
    if (selectedPage) {
        // Redirect to the selected page
        window.location.href = selectedPage;
    } else {
        // Show an alert if no option was selected
        alert("Please select an action from the dropdown.");
    }
}
