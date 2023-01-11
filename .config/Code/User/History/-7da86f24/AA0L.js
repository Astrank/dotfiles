export default function Header() {
    return (
        <header className='flex justify-between items-center py-10'>
          <div className='text-3xl font-bold'>Elementos Digitales</div>
          <nav>
            <ul className='flex gap-6'>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </nav>
        </header>
    )
}