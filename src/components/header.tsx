import React from 'react';
import { FaBars } from 'react-icons/fa'; // Ícone de menu

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <button
          className="text-white focus:outline-none" // Ocultar em dispositivos grandes
          onClick={toggleSidebar}
        >
          <FaBars size={24} />
        </button>
        <h1 className="text-white text-2xl font-bold">Minha Aplicação</h1>
      </div>
    </header>
  );
};

export default Header;