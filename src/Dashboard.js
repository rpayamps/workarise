import React from 'react';
import { Outlet } from 'react-router-dom';

function Dashboard(){
    return(
        <div>
             <h1>Task Management</h1>
             <nav>
            <ul>
              <li>
                <a href={`Development`}>Development</a>
              </li>
              <li>
                <a href={`Desgin`}>Desgin</a>
              </li>
              <li>
                <a href={`Marketing`}>Marketing</a>
              </li>
            </ul>
          </nav>
            <Outlet />
        </div>
    )
}


export default Dashboard;