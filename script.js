function handleChoreAssignment(event) {
    event.preventDefault();

    alert('Chore assigned successfully!');

}


document.getElementById('choreAssignmentForm').addEventListener('submit', handleChoreAssignment);
