// Wait until the HTML has been loaded.
document.addEventListener('DOMContentLoaded', () => {
  // Convert the supplied JSON strings into JavaScript arrays.
  const stocksData = JSON.parse(stockContent);
  const userData = JSON.parse(userContent);

  // Display the users in the sidebar.
  generateUserList(userData);
});

// Create a list item for each user.
function generateUserList(users) {
  const userList = document.querySelector('.user-list');

  // Clear existing names before rebuilding the list.
  userList.innerHTML = '';

  users.forEach(({ user, id }) => {
    const listItem = document.createElement('li');

    listItem.textContent = `${user.lastname}, ${user.firstname}`;
    listItem.id = id;

    userList.appendChild(listItem);
  });
}
