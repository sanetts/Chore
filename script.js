function openAddChoreForm() {
    // Replace this with the actual logic to show a form for adding a new chore
    alert('Open form for adding a new chore');
}


function handleChoreAssignment(event) {
    event.preventDefault();

    alert('Chore assigned successfully!');

}


document.getElementById('choreAssignmentForm').addEventListener('submit', handleChoreAssignment);
