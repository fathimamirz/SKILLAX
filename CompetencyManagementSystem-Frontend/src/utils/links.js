import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { FaAddressBook } from "react-icons/fa6";

const links = [
  { id: 1, text: 'stats', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'all projects', path: 'all-jobs', icon: <MdQueryStats /> },
  { id: 3, text: 'add Project', path: 'add-job', icon: <FaWpforms /> },
  { id: 4, text: 'profile', path: 'profile', icon: <ImProfile /> },
  // { id: 4, text: 'List', path: 'employee-list', icon: <FaAddressBook /> },
  
];

export default links;