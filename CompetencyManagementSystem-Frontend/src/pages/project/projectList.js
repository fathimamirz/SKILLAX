import React, { useEffect, useState } from "react";
import AvData from "./AvData";
import ApData from "./ApData";
import TabButton from "./TabButton";
import ProjectCardComponent from "./ProjectCardComponent";
import axios from "axios";

const ProjectList = () => {
  const [buttonId, setButtonId] = useState(0);
  const [data, setData] = useState(AvData);
  const [datas, setDatas] = useState(ApData);
  const [approveddatas, setApprovedDatas] = useState(ApData);
  const [rejecteddatas, setRejectedDatas] = useState(ApData);
  useEffect(()=>{
    axios.get('http://localhost:8800/api/v1/project/')
       .then(response => {
        setData(response.data.allProjects)
       })
       .catch(error => {
         console.error('Error:', error);
       });
  
   },[])
  useEffect(() => {
    const filteredApproved = data?.filter((item) => item.prjstatus === "Assigned");
    setApprovedDatas(filteredApproved);
    const filteredRejected = data?.filter((item) => item.status === "completed");
    setRejectedDatas(filteredRejected);
  }, [datas]);

  const buttonClick = (id) => {
    setButtonId(id);
  };

  const switchView = (switchId) => {
    switch (switchId) {
      case 0:
        return (
           <div className="flex flex-col gap-6 mt-4 ">
            {data?.length > 0 ? (
              data.map((item) => <ProjectCardComponent item={item} />)
            ) : (
              <h3 className="text-lg font-semibold mb-2">No Projects available</h3>
            )}
          </div>
        );
      // case 1:
      //   return (
      //     <div className="flex flex-col gap-6 mt-4 ">
      //       {data?.length > 0 ? (
      //         datas.map((item) => <ProjectCardComponent item={item} />)
      //       ) : (
      //         <h3 className="text-lg font-semibold mb-2">No Projects available</h3>
      //       )}
      //     </div>
      //   );
      case 2:
        return (
          <div className="flex flex-col gap-6 mt-4 ">
            {approveddatas?.length > 0 ? (
              approveddatas.map((item) => <ProjectCardComponent item={item} />)
            ) : (
              <h3 className="text-lg font-semibold mb-2">No Projects available</h3>
            )}
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-6 mt-4 ">
            {rejecteddatas?.length > 0 ? (
              rejecteddatas.map((item) => <ProjectCardComponent item={item} />)
            ) : (
              <h3 className="text-lg font-semibold mb-2">No Projects available</h3>
            )}
          </div>
        );
      default:
        return (
          <div className="flex flex-col gap-6 mt-4 ">
            {data?.length > 0 ? (
              data.map((item) => <ProjectCardComponent item={item} />)
            ) : (
              <h3 className="text-lg font-semibold mb-2">No Projects available</h3>
            )}
          </div>
        );
    }
  };

  return (
    <>
      
      <div >
        <menu>
          <TabButton onClick={() => buttonClick(0)} isActive={buttonId === 0}>
            All project
          </TabButton>
          {/* <TabButton onClick={() => buttonClick(1)} isActive={buttonId === 1}>
            Applied project
          </TabButton> */}
          <TabButton onClick={() => buttonClick(2)} isActive={buttonId === 2}>
            Assigned project
          </TabButton>
          <TabButton onClick={() => buttonClick(3)} isActive={buttonId === 3}>
            Completed project
          </TabButton>
        </menu>
        <div>{switchView(buttonId)}</div>
      </div>
    </>
  );
};

export default ProjectList;
