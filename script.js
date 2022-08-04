const userCard = document.getElementById("div-user-card");
const img = document.getElementById("img-profile");
const pname = document.getElementById("p-name");
const pemail = document.getElementById("p-email");
const paddr = document.getElementById("p-address");
const btn = document.getElementById("btn-random");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  img = resp.data.result.picture.large;
  pname.innerText = resp.data.result[0].name;

  // btn.onclick
}
callApi();
