let notifications = document.getElementById("notifications");
let success = document.querySelector(".success");
function createToast(type, icon, title, text) {
  let newToast = document.createElement("div");
  newToast.className = `toast ${type}`;
  newToast.innerHTML = `
            <i class="${icon}"></i>
            <div class="content">
                <div class="title">${title}</div>
                <span>${text}</span>
                <i onclick="this.parentElement.parentElement.remove()">↪</i>
            </div>
        `;
  notifications.appendChild(newToast);

  newToast.timeOut = setTimeout(() => {
    newToast.remove();
  }, 3000);
}

success.onclick = function () {
  let type = "Added TO Cart";
  let icon = "fa-solid fa-check";
  let title = "Success";
  let text = "This is a success toast.";
  createToast(type, icon, title, text);
};
