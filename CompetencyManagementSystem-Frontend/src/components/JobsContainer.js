import {React, useEffect,useState } from 'react';
import Job from './Job';
import AvData from '../pages/project/AvData';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import { getAllJobs } from '../features/allJobs/allJobsSlice';
import PageBtnContainer from './PageBtnContainer';
import ProjectCardComponent from '../pages/project/ProjectCards';
import axios from 'axios';
import { Box, FormControl, InputLabel, Modal, Select } from "@mui/material";
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
const JobsContainer = () => {
  const [data, setData] = useState(AvData);
  const [name, setNames] = useState();
   // eslint-disable-next-line
   const [open, setOpen] = useState(false);
   const [formData, setFormData] = useState({
    up_certificate:"",
  });
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
  const dispatch = useDispatch();
  useEffect(()=>{
    axios.get('http://localhost:8800/api/v1/project/')
       .then(response => {
        setData(response.data.allProjects)
       })
       .catch(error => {
         console.error('Error:', error);
       });
  
   },[])
   useEffect(()=>{
    axios.get('http://localhost:8800/api/v1/auth/employees')
       .then(response => {
        setNames(response.data.userList)
       })
       .catch(error => {
         console.error('Error:', error);
       });
  
   },[])
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchStatus, searchType, sort]);
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  if (isLoading) {
    return <Loading />;
  }
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  // if (jobs.length === 0) {
  //   return (
  //     <Wrapper>
  //       <h2>No jobs to display...</h2>
  //     </Wrapper>
  //   );
  // }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600, // Adjusted width
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border: '2px solid rgb(108 99 255)', // Border color
    borderRadius: '8px', // Border radius
  };

  const inputStyle = {
    backgroundColor: '#f3f4f6', // Background color for input space
    border: 'none',
    borderRadius: '4px',
    padding: '8px 12px',
    marginBottom: '16px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: 'rgb(108 99 255)', // Background color for button
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 20px',
    cursor: 'pointer',
    float: 'right', // Align to the right
  };
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const allocatedProject = (item) => {
setFormData((prevState) => ({
  ...prevState,
  prj_name: item.prj_name,
  prj_desc: item.description
}));
handleOpen()
  }
  
  return (
    <Wrapper>
      <div className=" flex flex-col gap-6 mt-4 ">
            {data?.length > 0 ? (
              data?.map((item) => <ProjectCardComponent item={item}  allocate = {allocatedProject} />)
            ) : (
              <h3 className="text-lg font-semibold mb-2">No Projects available</h3>
            )}
          </div>
          <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '16px' }}>PROJECT ALLOCATION</h2>
    <form 
  //  onSubmit={handleSubmit}
    >
      <div>
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            name="prj_name"
            value={formData.prj_name}
           // onChange={handleChangePn}
            required
            style={inputStyle}
          />
        </div>
     
      
    
        <div>
          <label htmlFor="projectDescription">Project Description:</label>
          <textarea
            id="projectDescription"
            name="prj_desc"
            value={formData.prj_desc}
           // onChange={handleChangePd}
            required
            style={inputStyle}
          />
        </div>
    
      <div>
        <div htmlFor="rating">Employees:</div>
     
         <FormControl sx={{ m: 1, width: "100%" }}>
         <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
    
          MenuProps={MenuProps}
        >
          {name?.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {`${name.firstName} ${name.lastName} `}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
      </div>
      <button type="submit" style={buttonStyle}>Add</button>
    </form>
  </Box>
</Modal>

    </Wrapper>
  );
};
export default JobsContainer;