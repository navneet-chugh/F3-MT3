// elements
const ipUrl = "https://api.ipify.org?format=json";
const ip = document.getElementById("ip");
const searchbtn = document.getElementById("searchbtn");
let ipAddress = "";
// function
async function ipApi() {
  try {
    let response = await fetch(ipUrl);
    let data = await response.json();
    console.log(data);
    ip.innerHTML = data.ip;
    ipAddress = data.ip;
  } catch (error) {
    console.log(error);
  }
}
ipApi();

// async function ipData()

searchbtn.addEventListener("click", () => {
  document.cookie = `ipAddress=${ipAddress}; path=./result.html`;
  window.location.href = "./result.html";
});
