import React, { useState } from 'react';
import LogoSidebar from './logo-sidebar';
import { FaHome, FaUser, FaCog, FaCalendarAlt  } from 'react-icons/fa'; // Exemplo de ícones, sinta-se à vontade para escolher outros
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {

  const [selectedItem, setSelectedItem] = useState<string | null>('home');

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <aside className={`bg-gray-800 text-white w-64 p-4 min-h-screen ${isOpen ? 'block' : 'hidden'}`}>
    <LogoSidebar />
    <nav>
        <ul>
          <li className={`mb-2 border rounded-lg p-2 ${selectedItem === 'home' ? 'bg-gray-700' : ''}`}>
            <Link to="/" 
              className="flex items-center hover:text-gray-300" 
              onClick={() => handleItemClick('home')}>
                <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li className={`mb-2 border rounded-lg p-2 ${selectedItem === 'agendas' ? 'bg-gray-700' : ''}`}>
            <Link to="/schedule" 
              className="flex items-center hover:text-gray-300" 
              onClick={() => handleItemClick('agendas')}>
                <FaCalendarAlt className="mr-2" /> Agenda Transporte
            </Link>
          </li>
          <li className={`mb-2 border rounded-lg p-2 ${selectedItem === 'perfil' ? 'bg-gray-700' : ''}`}>
            <Link to="#" 
              className="flex items-center hover:text-gray-300" 
              onClick={() => handleItemClick('perfil')}>
                <FaUser className="mr-2" /> Perfil
            </Link>
          </li>
          <li className={`mb-2 border rounded-lg p-2 ${selectedItem === 'config' ? 'bg-gray-700' : ''}`}>
            <Link to="#" 
              className="flex items-center hover:text-gray-300" 
              onClick={() => handleItemClick('config')}>
                <FaCog className="mr-2" /> Configurações
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;