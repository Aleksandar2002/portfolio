$(document).ready(function () {
  let html = "";

  // NAVIGATION
  let navLinks = [
    {
      text: "Home",
      path: "#home",
    },
    {
      text: "About me",
      path: "#about-me",
    },
    {
      text: "Services",
      path: "#services",
    },
    {
      text: "Projects",
      path: "#projects",
    },
    {
      text: "Skills",
      path: "#skills",
    },
    {
      text: "Contact",
      path: "#contact",
    },
  ];

  html = "";
  navLinks.forEach((link) => {
    html += `<li><a href="${link.path}">${link.text}</a></li>`;
  });
  $(".navigation ul").html(html);

  // HAMBURGER
  let hamburgerBtn = document.querySelector(".hamburger button");
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
      if (hamburgerBtn.classList.contains("animate")) {
        hamburgerBtn.classList.remove("animate");
        $("header .navigation").removeClass("visible");
        return;
      }
      $("header .navigation").addClass("visible");
      hamburgerBtn.classList.add("animate");
    });
  }

  // CLOSE NAV BUTTON
  let closeNav = document.querySelector(".closeNav");
  if (closeNav) {
    closeNav.addEventListener("click", () => {
      $("header .navigation").removeClass("visible");
      $(".hamburger button").removeClass("animate");
    });
  }

  // SERVICES
  let services = [
    {
      image: {
        path: "front.png",
        alt: "Frontend",
      },
      header: "Frontend development",
      text: `Frontend development refers to the creation and implementation of
      the <span> user interface and user experience</span> (UI/UX) of a
      website or web application. It focuses on the
      <span>client-side</span> of the application.`,
    },
    {
      image: {
        path: "back.png",
        alt: "Backend",
      },
      header: "Backend development",
      text: `For backend development, a crucial component is the
      <span>server-side logic</span> that handles the processing and
      management of data. This logic typically operates behind the
      scenes, serving as the
      <span>backbone of web applications and APIs</span>.`,
    },
    {
      image: {
        path: "db.png",
        alt: "Databases",
      },
      header: "Databases",
      text: `A database is a structured collection of data that is organized
      and stored in a way that allows
      <span>easy access, retrieval, and management of information</span
      >. It serves as a central repository for storing and managing
      various types of data.`,
    },
    {
      image: {
        path: "seo.png",
        alt: "SEO",
      },
      header: "SEO",
      text: `SEO (Search Engine Optimization) is the practice of improving a
      <span> website's visibility and ranking</span> in search engine
      results pages (SERPs). It involves
      <span>optimizing various aspects</span> of a website to make it
      more appealing to search engines.`,
    },
  ];
  html = "";
  services.forEach((service) => {
    html += `<div class="service">
    <img src="assets/img/${service.image.path}" alt="${service.image.alt}" />
    <h5>${service.header}</h5>
    <p>
      ${service.text}
    </p>
  </div>`;
  });
  $("#services .wrapper").html(html);

  // PROJECTS
  let projectArr = [
    {
      alt: "Car hunter",
      image: "carhunter.png",
      link: "https://carhunter02.000webhostapp.com/",
      technologies: ["HTML", "CSS", "SASS", "JavaScript", "Jquery", "PHP"],
    },
    {
      alt: "Game force",
      image: "gameforce.png",
      link: "https://aleksandar2002.github.io/gameForce/",
      technologies: ["HTML", "CSS", "SASS", "JavaScript", "Jquery"],
    },
    {
      alt: "Level up",
      image: "levelup.png",
      link: "https://levelup22.000webhostapp.com/",
      technologies: ["HTML", "CSS", "SASS", "JavaScript", "Jquery", "PHP"],
    },
    {
      alt: "Air mate",
      image: "airmate.png",
      link: "https://aleksandar2002.github.io/airtravel/",
      technologies: ["HTML", "CSS", "SASS"],
    },
    {
      alt: "Bookspectrum",
      image: "bookspectrum.png",
      link: "https://aleksandar2002.github.io/bookSpectrum/",
      technologies: ["HTML", "CSS", "SASS", "JavaScript", "Jquery"],
    },
  ];
  html = "";
  projectArr.forEach((project) => {
    html += `<div class="project">
    <img src="assets/img/${project.image}" alt="${project.alt}" />
    <div class="layer">
        <a href="${project.link}" target="_blank"
          >See project</a
        >
        <div class="technologies"><h6>Used technologies:</h6><p>`;
    project.technologies.forEach((tech) => {
      html += `${tech}, `;
    });
    html = html.substring(0, html.length - 2);
    html += `</p></div>
    </div></div>`;
    document.querySelector("#projects .wrapper").innerHTML = html;
  });

  let projects = document.querySelectorAll(".project");
  projects.forEach((pr) => {
    let layer = pr.querySelector(".layer");
    pr.addEventListener("mouseover", () => {
      layer.classList.add("visible");
    });
    pr.addEventListener("mouseout", () => {
      layer.classList.remove("visible");
    });
  });

  //SKILLS
  let skills = [
    {
      tech: "HTML",
      value: "94",
    },
    {
      tech: "CSS",
      value: "90",
    },
    {
      tech: "SASS",
      value: "90",
    },
    {
      tech: "Bootstrap",
      value: "76",
    },
    {
      tech: "Javascript",
      value: "83",
    },
    {
      tech: "Jquery",
      value: "68",
    },
    {
      tech: "PHP",
      value: "74",
    },
    {
      tech: "C#",
      value: "62",
    },
    {
      tech: "C",
      value: "57",
    },
    {
      tech: "Vue.js",
      value: "70",
    },
    {
      tech: "Angular",
      value: "51",
    },
  ];

  html = "";
  skills.forEach((skill) => {
    html += `<div class="skill">
    <div class="text">
      <p>${skill.tech}</p>
      <p>${skill.value}%</p>
    </div>
    <progress value="${skill.value}" max="100"></progress>
  </div>`;
  });
  $("#skills .wrapper").html(html);

  // CONTACT

  let form = document.querySelector("#contact form");
  form.reset();

  let inputs = document.querySelectorAll('#contact input[type="text"]');
  inputs.forEach((inp) => {
    let field = inp.parentElement;
    let label = field.querySelector("label");

    if (inp.value.length) {
      label.classList.add("goUp");
    }

    inp.addEventListener("focus", () => {
      label.classList.add("goUp");
    });

    inp.addEventListener("blur", () => {
      if (!inp.value.length) {
        label.classList.remove("goUp");
      }
    });

    inp.addEventListener("input", () => {
      let inpName = inp.getAttribute("name");
      let inpValue = inp.value;
      let reg = "";
      switch (inpName) {
        case "email": {
          reg = /^[a-z0-9\.\-\$\/]{5,40}@(gmail.com|yahoo.com)$/;
          break;
        }
        case "message": {
          reg = /^[A-z0-9\s\,\!\?\=\.\-\$\/]{5,40}$/;
          break;
        }
      }
      if (!testRegularExpresion(inpValue, reg)) {
        showError(inp);
      } else {
        hideError(inp);
      }
    });
  });

  let sendBtn = document.querySelector("#sendBtn");
  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    $("p.success").slideUp("slow");

    if (isThereAnyError() && ifSomeIsEmpty()) {
      $("p.invalid").slideUp("slow");
      $("p.success").slideDown("slow");
    } else {
      $("p.invalid").slideDown("slow");
    }
  });
});

function testRegularExpresion(val, reg) {
  return reg.test(val);
}
function hideError(inp) {
  let inputName = inp.getAttribute("name");
  slideUpError(inputName);
  inp.classList.remove("error");
}
function showError(inp) {
  let inputName = inp.getAttribute("name");
  slideDownError(inputName);
  inp.classList.add("error");
}

function slideDownError(name) {
  $("p.error." + name).slideDown("slow");
  $("p.error." + name).addClass("visible");
}
function slideUpError(name) {
  $("p.error." + name).slideUp("slow");
  $("p.error." + name).removeClass("visible");
}

function isThereAnyError() {
  return document.querySelectorAll("p.error.visible").length === 0;
}
function ifSomeIsEmpty() {
  let inputs = Array.from(
    document.querySelectorAll('#contact input[type="text"]')
  );
  return !inputs.some((inp) => inp.value.length === 0);
}
