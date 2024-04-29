import React from "react";

const ProjectCardComponent = ({item}) =>{

return(
    <div
        key={item.id}
        className=" bg-slate-50 rounded-lg shadow-md p-6 flex-row"
      >
        <h3 className="text-lg font-bold mb-2">Title : <span className="font-normal">{item.title}</span></h3>
        <p className="text-gray-900 mb-2"><span className="font-bold">Description :</span> {item.description}</p>
        <p className="text-gray-900 mb-2"><span className="font-bold">Techstack :</span> {item.techstack}</p>
        <p className="text-gray-900 mb-2"><span className="font-bold">Status :</span> {item.status}</p>
        <p className="text-gray-900 mb-2"><span className="font-bold">Tenure :</span> {item.tenure}</p>
      {item.prjstatus &&  <p className="text-gray-900"><span className="font-bold">Assign Status:  </span > <span className="font-semibold">{item.prjstatus}</span></p> 
      }
      </div>
)

}

export default ProjectCardComponent;