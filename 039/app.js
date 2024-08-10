const VIEW_JOB_POST_BTN = document.querySelector(".view-job-post");
const JOB_DESCRIPTION = document.querySelector(".job-description");
const CLOSE_JOB_DESCRIPTION_BTN = document.querySelector(".icon-tabler-x");

VIEW_JOB_POST_BTN.addEventListener("click", () => {
  JOB_DESCRIPTION.style.display = "block";
});

CLOSE_JOB_DESCRIPTION_BTN.addEventListener("click", () => {
  JOB_DESCRIPTION.style.display = "none";
});
