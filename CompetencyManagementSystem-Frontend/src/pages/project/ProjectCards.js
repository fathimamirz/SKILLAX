import React from "react";

const ProjectCards = ({ item ,allocate}) => {

  return (
    <div
      key={item.id}
      className="bg-slate-50 rounded-lg shadow-md p-6 flex-row relative"
    >
      {/* Content */}
      <h3 className="text-lg font-bold mb-2">Title : <span className="font-normal">{item.prj_name}</span></h3>
      <p className="text-gray-900 mb-2"><span className="font-bold">Description :</span> {item.description}</p>
      <p className="text-gray-900 mb-2"><span className="font-bold">Techstack :</span> {item.techstack}</p>
      <p className="text-gray-900 mb-2"><span className="font-bold">Status :</span> {item.status}</p>
      <p className="text-gray-900 mb-2"><span className="font-bold">Tenure :</span> {item.tenure}</p>
      {item.prjstatus && <p className="text-gray-900"><span className="font-bold">Assign Status:  </span > <span className="font-semibold">{item.prjstatus}</span></p>
      }

      {/* Conditional Button Rendering */}
      {item.status === "pending" ? (
        <button className="absolute bottom-4 right-4 space-x-2 bg-indigo-500 text-white px-3 py-1 rounded-md m-2" onClick={()=>allocate(item)} >Allocate</button>
      ) : ( null
        // <button className="absolute bottom-4 right-4 space-x-2 bg-indigo-500 text-white px-3 py-1 rounded-md m-2">Update</button>
      )}
    </div>
  )
}

export default ProjectCards;
