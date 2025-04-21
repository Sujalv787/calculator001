let input = document.querySelector("#inputext");
let buttons = document.querySelectorAll("button");
let currvalue = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => { 
        const value = btn.textContent;

        switch (value) {
            case "AC":
                input.value = "";
                currvalue = "";
                break;

            case "Del":
                currvalue = currvalue.slice(0, -1);
                input.value = currvalue;
                break;

            case "=":
                try {
                    currvalue = eval(currvalue).toString();
                    input.value = currvalue;
                } catch {
                    input.value = "Error";
                    currvalue = "";
                }
                break;

            default:
                currvalue += value;
                input.value = currvalue;
        }
    });
});
