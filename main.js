function showVerticalMessage(str) {
    if (!str) {
        return console.log("Напишите что-нибудь!")
    }

    if (str[0] === "м") {
        str = str[0].toUpperCase() + str.slice(1);
    }

    if (str.length > 10) {
        str = str.slice(0, 10);
    }

    let verticalStr = "";
    for (let i = 0; i <= str.length; i++) {
        verticalStr += (str[i] + "\n");
    }
    console.log(verticalStr);
}

showVerticalMessage("марафонмарафонмарафон");