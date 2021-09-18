let textHover = () => {
    let title = document.querySelector(".heading").innerHTML;
    let text = [...title];
    let content = "";
    text.map((item) => {
        content += `
            <span>${item}</span>
        `
    })
    document.querySelector(".heading").innerHTML = content;
}

textHover();