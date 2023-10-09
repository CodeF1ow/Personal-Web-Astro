export interface sameAs {
    href: string
    title: string
    icon: string
  }
  
  
  export const github: sameAs = {
    href: "https://github.com/k1ri86",
    title: "GitHub",
    icon: "line-md:github-twotone"
  }
  
  export const replit: sameAs = {
    href: "https://replit.com/",
    title: "Replit",
    icon: "simple-icons:replit"
  }
  
  export const codepen: sameAs = {
    href: "https://codepen.io/",
    title: "CodePen",
    icon: "teenyicons:codepen-solid"
  }
  
  export const freecododecamp: sameAs = {
    href: "https://www.freecodecamp.org/",
    title: "freeCodeCamp",
    icon: "simple-icons:freecodecamp"
  }
  
  export const linkedin: sameAs = {
    href: "https://www.linkedin.com/in/",
    title: "LinkedIn",
    icon: "ri:linkedin-fill"
  }
  
  export const email: sameAs = {
    title: "contacto@kiri86.com",
    icon: "clarity:email-solid",
    get href() {
      return `mailto:${this.title}`
    }
  }
  
  export const resume: sameAs = {
    href: "/resume-fullstackdev-phone-censored.pdf",
    title: "Résumé",
    icon: "pepicons-print:cv"
  }