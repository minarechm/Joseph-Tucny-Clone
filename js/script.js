const project2 = document.getElementById("project2")
const project2Image = document.getElementById("project2Image")
const project2Number = document.getElementById("project2Number")
const project2H1 = document.getElementById("project2H1")

const arrow = new Image(64, 54);
arrow.src = "./img/content/projects/project_list/1/Project_lister_v1 Copy-Project_lister_hover/arrow.svg"

project2.addEventListener("mouseenter", () => { 
    project2Image.className = "project-image2 active";
    project2Number.innerText=""
    project2Number.append(arrow)
    project2.style.marginLeft="25px"
    project2.style.color="#bf9215"
})
project2.addEventListener("mouseleave", () => {
    project2Image.className = "project-image2";
    project2Number.innerText="02"
    project2Number.removeAttribute(arrow)
    project2.style.marginLeft="-2em"
    project2.style.color="#ffffff"
})




