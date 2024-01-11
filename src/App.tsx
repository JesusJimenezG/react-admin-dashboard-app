import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar } from './components';
import {
  Ecommerce,
  Calendar,
  Employees,
  Stacked,
  Customers,
  Pyramid,
  Kanban,
  Area,
  Bar,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Pie,
  Orders,
  Line,
} from './pages';
import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
  const state = useStateContext();
  const { activeMenu } = state!;
  return (
    <Router>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
          <TooltipComponent content={'Settings'} position="TopCenter">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg- ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? ' md:ml-72' : 'flex-2'
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Ecommerce />} />
              {/* Pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />
              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />
              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/are" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stack" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
