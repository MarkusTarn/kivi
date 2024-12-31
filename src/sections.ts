export type Section = {
  title?: string
  description?: string
  id: string
  background: string
}

export const sections: Section[] = [
  {
    id: "plaster",
    background: "/plaster.jpg"
  },
  {
    id: "microcement",
    background: '/microcement.jpg'
  },
  {
    id: "insulation",
    background: '/insulation.jpg'
  },
  {
    id: "contact",
    background: '/contact.jpg'
  }
]

