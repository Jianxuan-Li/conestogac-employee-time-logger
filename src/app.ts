const openPortalBtn: HTMLButtonElement = document.querySelector("#open-employee-portal");
const portalUrl: string = "https://employeeportal.conestogac.on.ca/CollegePortal/Default.aspx";

openPortalBtn.onclick = () => {
  chrome.tabs.create({ url: portalUrl });
};
