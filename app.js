const btn = document.querySelectorAll(".btn");

const nofitication = document.querySelector(".notification");

const toastDetail = {
  time: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Success",
  },

  error: {
    icon: "fa-xmark",
    text: "Error",
  },

  warning: {
    icon: "fa-triangle-exclamation",
    text: "Warning",
  },

  info: {
    icon: "fa-circle-info",
    text: "Info",
  },
};

const removeToast = (toast) => {
  //   toast.classlist.add("hide");
  //   if (toast.timedid) clearTimeout(toast.timedid);
  //   setTimeout(() => toast.remove(), 500);

  toast.classList.add("hide");
  if (toast.timedid) clearTimeout(toast.timedid); // Clearing the timeout for the toast
  setTimeout(() => toast.remove(), 500);
};

const creatToast = (id) => {
  const { icon, text } = toastDetail[id];
  const toast = document.createElement("li");
  toast.className = `toast ${id}`;
  toast.innerHTML = `<div class="column">
                        <i class="fa-solid ${icon}"></i>
                         <span>${text}: This is a ${text} toast</span>
                    </div>
                    <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
  nofitication.appendChild(toast);

  toast.timedid = setTimeout(() => removeToast(toast), toastDetail.time);
  console.log(toast);
};

console.log(btn);

btn.forEach((btn) => {
  btn.addEventListener("click", () => creatToast(btn.id));
});
