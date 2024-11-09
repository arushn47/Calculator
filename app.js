const btns = document.querySelectorAll("button");
const inp = document.querySelector(".display-text h1");
const eq = document.querySelector(".equals");
const clr = document.querySelector(".ac");
const back = document.querySelector(".back");
const paren = document.querySelector(".paren");
const toggleMode = document.getElementById('toggle-mode');
const body = document.body;

toggleMode.addEventListener('change', () => {
    body.classList.toggle('darkmode', toggleMode.checked);
});

function calculateResult() {
    try {
        let result = inp.innerText
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-");
        inp.innerText = eval(result);
    }

    catch {
        alert("Error");
    }
}

function clear() {
    inp.innerText = "";
    inp.style.fontSize = "80px";
}

eq.addEventListener("click", calculateResult);
clr.addEventListener("click", clear);

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        inp.scrollLeft = inp.scrollWidth;
    });

    if (btn.classList.contains("add")) {
        btn.addEventListener("click", () => {
            inp.innerText += "+";
        });
    }

    if (!btn.classList.contains("exclude")) {
        btn.addEventListener("click", () => {
            inp.innerText += btn.innerText;
        });
    }

    if (btn.classList.contains("sub")) {
        btn.addEventListener("click", () => {
            inp.innerText += "−";
        });
    }

    if (btn.classList.contains("mul")) {
        btn.addEventListener("click", () => {
            inp.innerText += "×";
        });
    }

    if (btn.classList.contains("div")) {
        btn.addEventListener("click", () => {
            inp.innerText += "÷";
        });
    }
});

back.addEventListener("click", () => {
    inp.innerText = inp.innerText.slice(0, -1);
});