import { FormRow, FormRowSelect } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from '../../features/job/jobSlice';
import { useEffect } from 'react';
import FormRows from '../../components/FormRows';
const AddJob = () => {
  const {
    isLoading,
    position,
    title,
    requirements,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    description,
    editJobId,
    tenure,
  } = useSelector((store) => store.job);
  const {manager_id }={manager_id:2}
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !title || !requirements || !tenure) {
      toast.error('Please fill out all fields');
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: { title, description, requirements, status, tenure },
        })
      );
      return;
    }
    dispatch(createJob({ title, description, requirements,status, tenure, tenure,manager_id}));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  // useEffect(() => {
  //   if (!isEditing) {
  //     dispatch(
  //       handleChange({
  //         name: 'jobLocation',
  //         value: user.location,
  //       })
  //     );
  //   }
  // }, []);

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit Project' : 'add Project'}</h3>
        <div className='form-center'>
          {/* company */}
          <FormRows
            type='text'
            name='title'
            value={title}
            handleChange={handleJobInput}
          />
          {/* description */}
          <FormRows
            type='text'
            name='description'
            value={description}
            handleChange={handleJobInput}
          /> 
          {/* jobLocation */}
          <FormRows
            type='text'
            name='requirements'
            labelText='requirements'
            value={requirements}
            handleChange={handleJobInput}
          />
          {/* status */}
          <FormRowSelect
            name='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* job type
          <FormRowSelect
            name='jobType'
            labelText='type'
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          */}
          {/* tenure */}
          <FormRows
            type='text'
            name='tenure'
            value={tenure}
            handleChange={handleJobInput}
          /> 
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
