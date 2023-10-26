import { Instagram, Youtube } from "lucide-react"

export const TestimonialsItems = [
  {
    id: 1,
    video: 'https://www.youtube.com/embed/Ll9wtNyKdJU?si=OjDUpPdYNk4eTbX3',
    description: 'De trabajar como ABOGADO a ser TRADER RENTABLE ',
    highlightWords: ['ABOGADO', 'TRADER RENTABLE', '90', 'DIAS']
  },
  {
    id: 2,
    video: 'https://www.youtube.com/embed/pct3sdSp6uI?si=FZVhM4UabuaMEEq1',
    description: 'DE 0$ A GANAR MAS DE 1.200$ USD MENSUALES COMO TRADER OPERANDO FOREX',
    highlightWords: ['0$', '1.200$', 'USD', 'MENSUALES', 'TRADER', 'MERCADO', 'AMERICANO']
  },
  {
    id: 3,
    video: 'https://www.youtube.com/embed/pdGHuWVKqpQ?si=eQdOtrUzVTekcepb',
    description: 'Tres PILARES que lo hicieron ganar mas de 15.000 USD ',
    highlightWords: ['PILARES', '15.000', 'USD']
  }
]

export const FaqItems = [
  {
    id: 1,
    question: 'What is the best thing about Switzerland?',
    answer: 'I do not know, but the flag is a big plus.'
  },
  {
    id: 2,
    question: 'Did you hear about the mathematician who is afraid of negative numbers?',
    answer: 'He will stop at nothing to avoid them.'
  },
  {
    id: 3,
    question: 'Why do we tell actors to “break a leg?”',
    answer: 'Because every play has a cast.'
  },
  {
    id: 4,
    question: 'Helvetica and Times New Roman walk into a bar.',
    answer: '“Get out of here!” shouts the bartender. “We don’t serve your type.”'
  }
]

export const Contact_Items = [
  {
    id: 1,
    href: 'https://www.instagram.com/criptokuz',
    icon: <Instagram className="w-6 h-6" />
  },
  {
    id: 2,
    href: 'https://api.whatsapp.com/send?phone=542984674480&text=Hola,%20qué%20tal?%20Agende%20una%20sesión%20con%20Mauro%20por%20favor',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={24}
      >
        <path
          fill="#FFF"
          fillRule="evenodd"
          d="M3.5 12a8.5 8.5 0 1 1 8.5 8.5 8.455 8.455 0 0 1-4.542-1.314 1 1 0 0 0-.821-.113l-2.88.859 1.085-2.537a1 1 0 0 0-.07-.92A8.456 8.456 0 0 1 3.5 12ZM12 1.5C6.201 1.5 1.5 6.201 1.5 12c0 1.838.473 3.568 1.305 5.073L1.08 21.107a1 1 0 0 0 1.206 1.351l4.5-1.342A10.456 10.456 0 0 0 12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5Zm2.293 12.682-1.315.926A9.338 9.338 0 0 1 11 13.585a10.202 10.202 0 0 1-1.624-2.114l.835-.709a1 1 0 0 0 .236-1.232l-1.064-2a1 1 0 0 0-1.54-.283l-.316.275c-.759.662-1.208 1.75-.836 2.852A12.049 12.049 0 0 0 9.586 15c1.813 1.813 3.655 2.527 4.733 2.805.868.223 1.689-.076 2.268-.548l.591-.482a1 1 0 0 0-.12-1.634l-1.678-1a1 1 0 0 0-1.088.041Z"
          clipRule="evenodd"
        />
      </svg>
    )
  },
  {
    id: 3,
    href: 'https://www.youtube.com/@MauroKuz/videos',
    icon: <Youtube className="w-6 h-6" />
  },
  {
    id: 4,
    href: 'https://open.spotify.com/show/4RvC4XKdiuYOrqDB3O7HMA?si=e2bc90d3735d4bf1&nd=1',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
        width={20}
      >
        <title>{"spotify [#162]"}</title>
        <path
          fill="#FFF"
          fillRule="evenodd"
          d="M15.915 8.865c-3.223-1.914-8.54-2.09-11.618-1.156a.935.935 0 0 1-.543-1.79c3.533-1.073 9.405-.866 13.116 1.337a.935.935 0 0 1-.955 1.609ZM15.81 11.7a.78.78 0 0 1-1.073.257c-2.687-1.652-6.785-2.13-9.964-1.165A.78.78 0 0 1 4.32 9.3c3.631-1.102 8.146-.568 11.233 1.329a.779.779 0 0 1 .257 1.071Zm-1.224 2.723a.623.623 0 0 1-.857.207c-2.348-1.435-5.304-1.759-8.785-.964a.622.622 0 1 1-.277-1.215c3.809-.871 7.076-.496 9.712 1.115.294.18.387.563.207.857ZM10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10C20 4.478 15.523.001 10 .001V0Z"
        />
      </svg>
    )
  }
]