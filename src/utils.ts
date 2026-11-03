type Theme = "light" | "dark";

const getStoredOrOSTheme = (): Theme => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      return savedTheme;
    }
    
    // fallback based on OS preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  };

export function initDarkLightMode(): void {
    const theme = getStoredOrOSTheme();
    const img: HTMLImageElement = document.querySelector(".dark-light-switch img")!;

    if (theme === "dark") {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
        img.src = "sun.svg";
        img.alt = "Light theme";
    } else {
        document.documentElement.classList.remove("dark-mode");
        document.documentElement.classList.add("light-mode");
        img.src = "moon.svg";
        img.alt = "Dark theme";
    }
    addDarkLightToggleHandler();
}

function addDarkLightToggleHandler() {
    document
        .querySelector(".dark-light-switch")!
        .addEventListener("click", toggleDarkLightMode);
}

function toggleDarkLightMode() {
    const img: HTMLImageElement = document.querySelector(".dark-light-switch img")!;
    if (img.src.includes("sun.svg")) {
        // transition from dark to light mode
        img.src = "moon.svg";
        img.alt = "Dark theme";
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark-mode");
        document.documentElement.classList.add("light-mode");
    } else {
        // transition from light to dark mode
        img.src = "sun.svg";
        img.alt = "Light theme";
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.remove("light-mode");
        document.documentElement.classList.add("dark-mode");
    }
}

export function switchNavTab() {
    const $nav = document.querySelector("nav");
    if(!$nav) return;

    const [home, links, projects, resume] = [...$nav.children];
    const pageName = window.location.href.split("/portfolio/")[1];
    console.log("pageName", pageName);

    switch(pageName) {
        case "links.html": {
            links.classList.add("selected");
            break;
        }

        case "projects.html": {
            projects.classList.add("selected");
            break;
        }

        case "":
        default: {
            home.classList.add("selected");
            break;
        }
    }
}