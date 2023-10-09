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
    href: "https://replit.com/@Kiri86",
    title: "Replit",
    icon: "simple-icons:replit"
  }
  
  export const freecododecamp: sameAs = {
    href: "https://www.freecodecamp.org/espanol/fcc35a7a1bc-9e34-450f-8b60-788665c5dbd7/",
    title: "freeCodeCamp",
    icon: "simple-icons:freecodecamp"
  }
  
  export const linkedin: sameAs = {
    href: "https://www.linkedin.com/in/kiri86dev/",
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
    href: "/curriculum.pdf",
    title: "Curriculum",
    icon: "pepicons-print:cv"
  }