const btn = document.querySelector(".btn");
const wrapper = document.querySelector(".wrapper");
let name = document.querySelector(".name");
let userName = document.querySelector(".username");
let Gender = document.querySelector(".Gender");
let address = document.querySelector(".address");
let email = document.querySelector(".email");
let birthday = document.querySelector(".birthday");
let img = document.querySelector("img");


btn.addEventListener("click", () => {
    getUser();
    wrapper.classList.remove("active");
});

// get user data
function getUser() {
    const url = "https://api.api-ninjas.com/v1/randomuser";
    const apiKey = "VTOMZO2EHgXCKNUu6C5G4Q==3HksQbohiVTSTlnX";
    const options = {
        method: "GET",
        headers: {
            "X-Api-Key": apiKey,
            "content-type": 'application/json'
        }
    };
    fetch(url, options)
        .then(res => res.json())
        .then(data => {
            name.textContent = data.username;
            userName.textContent = data.name;
            Gender.textContent = data.sex;
            address.textContent = data.address;
            email.textContent = data.email;
            birthday.textContent = data.birthday;
            getImg();
        })
        .catch(err => {
            alert(
                `THERE IS AN ERROR PLEASE TRY AGIN OR REFRESH THE PAGE.\nthe error is ${err}`
            );
        });
}

//get user img

function getImg() {
    const apiKey = "CvKwcXTjZMy9EY";
    const options = {
        headers: {
            "Accept": "image/png"
        }
    };
    let url = `https://api.multiavatar.com/${Math.floor(Math.random() * 10000)}.png?apikey=${apiKey}`;
    fetch(url, options)
        .then(res => res.arrayBuffer())
        .then(buffer => {
            let binary = '';
            let bytes = new Uint8Array(buffer);
            let len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            let dataUrl = "data:image/png;base64," + btoa(binary);
            img.src = dataUrl;
            wrapper.classList.add("active");
        })
        .catch(err => {
            alert(
                `THERE IS AN ERROR PLEASE TRY AGIN OR REFRESH THE PAGE.\nthe error is ${err}`
            );
        });
}