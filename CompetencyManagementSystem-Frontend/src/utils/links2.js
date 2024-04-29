import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { FaAddressBook } from "react-icons/fa6";

const links2 = [
  { id: 1, text: 'stats', path: '/admin-dashboard', icon: <IoBarChartSharp /> },
//   { id: 2, text: 'all projects', path: 'all-jobs', icon: <MdQueryStats /> },
{ id: 2, text: 'all projects', path: 'projectlist', icon: <MdQueryStats /> },
//   { id: 3, text: 'add Project', path: 'add-job', icon: <FaWpforms /> },
//   { id: 4, text: 'profile', path: 'profile', icon: <ImProfile /> },
  { id: 3, text: 'All Employees', path: 'employee-list', icon: <FaAddressBook /> },
  { id: 4, text: 'All Managers', path: 'manager-list', icon: <FaAddressBook /> },
];

export default links2;