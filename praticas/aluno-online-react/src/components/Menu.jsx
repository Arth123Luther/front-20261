
function Menu() {
    return (
    <nav>
        <ul className="list-outside pl-5 m-0">
          <li className="list-disc my-4 ml-4">
            <a className="text-[#303030] no-underline px-2 py-2 block font-semibold text-lg" 
            href="#">Dashboard</a></li>
          
          <li className="list-disc my-4 ml-4">
            <a className="text-[#303030] no-underline px-2 py-2 block font-semibold text-lg" 
            href="#">Notas</a></li>
          
          <li className="list-disc my-4 ml-4">
            <a className="text-[#303030] no-underline px-2 py-2 block font-semibold text-lg" 
            href="#">Faltas</a></li>
          
          <li className="list-disc my-4 ml-4">
            <a className="text-[#303030] no-underline px-2 py-2 block font-semibold text-lg" 
            href="#">Boletos</a></li>
          
          <li className="list-disc my-4 ml-4">
            <a className="text-[#303030] no-underline px-2 py-2 block font-semibold text-lg" 
            href="#">Requerimentos</a></li>
          
          <li className="list-disc my-4 ml-4">
            <a className="text-[#303030] no-underline px-2 py-2 block font-semibold text-lg" 
            href="#">Sair</a></li>
        </ul>
      </nav>
      );
}

export default Menu;