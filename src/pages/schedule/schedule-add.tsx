import { useState } from 'react';
import Axios from "axios";
import ButtonNavigatorPanel from '@/components/button-navigator-panel';

const ScheduleAdd = () => {

  const [placa, setPlaca] = useState('');
  const [detail, setDetail] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');

  const handlePlacaChange = (e) => {
    setPlaca(e.target.value);
  };

  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  };

  const handleScheduleDateChange = (e) => {
    setScheduleDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para lidar com os dados do formulário, por exemplo, enviar para o servidor
    const postSchedules = async () => {
      const { data } = await Axios.post(
        "http://localhost:8080/schedule-transport",
        {
          signCode: placa,
          scheduleDate: scheduleDate+":00Z",
          detailDescription: detail
        }
      );
    };
    postSchedules();

    // Limpar os campos do formulário após o envio
    setPlaca('');
    setDetail('');
    setScheduleDate('');
  };

  return (
    <div>
      <ButtonNavigatorPanel add={{insert:false, name: ''}} titlePanel="Adicionar Agenda" />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="placa" className="block">Placa:</label>
          <input 
            type="text" 
            id="placa" 
            value={placa} 
            onChange={handlePlacaChange} 
            className="border rounded-lg p-2" />
        </div>
        <div>
          <label htmlFor="detail" className="block">Detail:</label>
          <input 
            type="text" 
            id="detail" 
            value={detail} 
            onChange={handleDetailChange} 
            className="border rounded-lg p-2"/>
        </div>
        <div>
          <label htmlFor="scheduleDate" className="block">Data da Agenda:</label>
          <input
            type="datetime-local"
            id="scheduleDate"
            value={scheduleDate}
            onChange={handleScheduleDateChange}
            className="border rounded-lg p-2"
          />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleAdd;