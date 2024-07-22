const billingDropdown = document.querySelector(".billing h2");
const billingInfo = document.querySelector(".billing-info");
const billingChevron = billingDropdown.querySelector(".icon-tabler");
const invoicesDropdown = document.querySelector(".invoices h2");
const invoicesList = document.querySelector(".invoices-list");
const invoicesChevron = invoicesDropdown.querySelector(".icon-tabler");
const breadcrumbs = [...document.querySelectorAll(".breadcrumbs ul li p")];

console.log(billingDropdown);
console.log(billingInfo);
console.log(billingChevron);
console.log(invoicesDropdown);
console.log(invoicesList);
console.log(invoicesChevron);

const openSection = (section, chevron, crumb) => {
  breadcrumbs.forEach((crumb) => {
    crumb.classList.remove("active");
  });

  if (crumb === "billing" && section.classList.contains("open")) {
    section.classList.toggle("open");
    chevron.classList.toggle("open-chevron");
    document.querySelector(
      `.section-name-${crumb}`
    ).parentElement.style.visibility = "hidden";
    document.querySelector(
      `.section-name-invoices`
    ).parentElement.style.visibility = "hidden";
    document.querySelector(`.section-name-${crumb}`).classList.remove("active");
    document.querySelector(`.section-name-account`).classList.add("active");

    if (invoicesList.classList.contains("open")) {
      invoicesChevron.classList.toggle("open-chevron");
      invoicesList.classList.toggle("open");
    }
  } else if (crumb === "billing" && !section.classList.contains("open")) {
    section.classList.toggle("open");
    chevron.classList.toggle("open-chevron");
    document.querySelector(`.section-name-${crumb}`).classList.add("active");
    document.querySelector(
      `.section-name-${crumb}`
    ).parentElement.style.visibility = "visible";
    invoicesList.parentElement.classList.toggle("open");
  }

  if (crumb === "invoices" && section.classList.contains("open")) {
    section.classList.toggle("open");
    chevron.classList.toggle("open-chevron");
    document.querySelector(
      `.section-name-${crumb}`
    ).parentElement.style.visibility = "hidden";
    document
      .querySelector(`.section-name-billing`)
      .parentElement.classList.add("active");
  } else if (crumb === "invoices" && !section.classList.contains("open")) {
    section.classList.toggle("open");
    chevron.classList.toggle("open-chevron");
    document.querySelector(`.section-name-${crumb}`).classList.add("active");
    document
      .querySelector(`.section-name-billing`)
      .parentElement.classList.remove("active");
    document.querySelector(
      `.section-name-${crumb}`
    ).parentElement.style.visibility = "visible";
  }
};

billingDropdown.addEventListener("click", () => {
  console.log("billing dropdown clicked");

  openSection(billingInfo, billingChevron, "billing");
});

invoicesDropdown.addEventListener("click", () => {
  console.log("invoices dropdown clicked");

  openSection(invoicesList, invoicesChevron, "invoices");
});
