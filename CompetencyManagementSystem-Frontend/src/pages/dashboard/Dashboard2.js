import { Outlet } from 'react-router-dom';
import {  SmallSidebar1, } from '../../components';
import Wrapper from '../../assets/wrappers/SharedLayout';
import BigSidebar2 from '../../components/BigSidebar2';
import Navbar2 from '../../components/Navbar2';
const Dashboard2 = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar1 />
        <BigSidebar2 />
        <div>
          <Navbar2 />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default Dashboard2;