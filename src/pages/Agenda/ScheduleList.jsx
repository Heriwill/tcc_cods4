import React from 'react';

const ScheduleList = ({ appointments }) => {
    return (
        <ul>
            {appointments.map((appointment, index) => (
                <li key={index}>
                    {appointment.name} - {appointment.date} às {appointment.time}
                </li>
            ))}
        </ul>
    );
};

export default ScheduleList;
