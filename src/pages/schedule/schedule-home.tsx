import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Axios from 'axios';
import ButtonNavigatorPanel from '@/components/button-navigator-panel';

const ScheduleHome = () => {
    const [schedules, setSchedules] = useState([]);

    const fetchSchedules = async () => {
        const { data } = await Axios.get(
          "http://localhost:8080/schedule-transport"
        );
        const schedules = data.content;
        setSchedules(schedules);
    };

    useEffect(() => {
        fetchSchedules();
    }, []);

    return (
        <div>
        <ButtonNavigatorPanel add={{insert:true, name: 'Adicionar', linkTo:"/schedule/add"}} titlePanel="Agendas de Transporte" />
          <Table>
            <TableHeader>
              <TableHead>Id</TableHead>
              <TableHead>Veículo</TableHead>
              <TableHead>Data Agenda</TableHead>
            </TableHeader>
            <TableBody>
              {schedules.map((schedule) => (
                <TableRow key={schedule.id}>
                  <TableCell>{schedule.id}</TableCell>
                  <TableCell>{schedule.signCode}</TableCell>
                  <TableCell>{schedule.scheduleDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
    );
};

export default ScheduleHome;