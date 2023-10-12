import s from './Footer.module.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={s.container}>
      © { currentYear } GustavoEduca
    </div>
  )
}
