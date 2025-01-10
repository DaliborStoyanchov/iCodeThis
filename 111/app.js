const SECTIONS = [...document.querySelectorAll("section")];

let buttonContent;

SECTIONS.forEach((section) => {
  if (section.className === "card-three") {
    buttonContent = "Follow";
  } else {
    buttonContent = "Following";
  }

  const content = `
  <div class="header">
      <img
        src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=2048x2048&w=is&k=20&c=8QovDK9XochFpaIC-N3pn5EEaRSVuE1SKpQDVUxLSUk="
        alt="avatar">
      <button class="dark-btn">${buttonContent}</button>
    </div>
    <div class="info">
      <h3>Sally Ramas</h3>
      <p>@sallytheramas</p>
    </div>
    <div class="description">
      <p class="dedication">Product Designer at @company. Working on @othercompany in my free time.</p>
      <p class="activity">
        <strong>15K</strong> Followers
        <span class="dot"></span>
        <strong>7K</strong> Following
        <span class="dot"></span>
        Since April 30, 2017
      </p>
    </div>
`;

  section.innerHTML = content;
});
