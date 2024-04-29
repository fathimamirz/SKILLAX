import React , { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const ProfilePages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    address: '',
    phone: '',
    profileImage: '/images/riz.jpeg' // Initial profile image path
  });
  const [profileImageFile, setProfileImageFile] = useState(null); // State for profile image file

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileImageFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can handle updating the profile picture along with other form data
  
    if (profileImageFile) {
      // Perform image upload logic here, such as using FormData and sending it to the server
      // After successful upload, update the profile image path in formData
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          profileImage: reader.result // Update profile image path in formData with the uploaded image
        });
      };
      reader.readAsDataURL(profileImageFile);
    }
    toggleModal(); // Close modal after form submission
  };

  return (
    <div className="container">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <span style={{ textDecoration: "underline" }}>About Me</span>
      </h2>
      <div className="flex flex-wrap">
        {/* First Row */}
        <div className="sm:w-2/6 p-2 flex items-center justify-center">
  {/* Container 1 */}
  <div className="bg-slate-50 p-3 rounded-lg flex-1 shadow-md hover:shadow-lg flex flex-col items-center"> {/* Updated class */}
  <label htmlFor="profile-picture" className="relative">
  <img 
    src={formData.profileImage} 
    alt="upload image" 
    className="w-32 h-32 mx-auto rounded-full mb-6 cursor-pointer border-2 border-blue-100"
  />
  <input 
    type="file" 
    id="profile-picture" 
    accept="image/*" 
    style={{ display: "none" }} 
    onChange={handleFileChange} 
  />
</label>

    <div className="text-center">
      <p><strong>Email:</strong> <span className="bg-gray-100 px-2 py-1 rounded">rizvin@gmail.com</span></p>
      <p><strong>Position:</strong> <span className="bg-gray-100 px-2 py-1 rounded">Manager</span></p>
    </div>
  </div>
        </div>
        <div className="sm:w-4/6 p-3 flex items-center justify-center">
          {/* Container 2 */}
          <div className="bg-slate-50 p-6 rounded-lg flex-1 shadow-md hover:shadow-lg">
            <div className="space-y-4">
              <p><strong className="mr-2">Name:</strong> <span className=" px-2 py-1 rounded">Rizvin Usman</span></p>
              <p><strong className="mr-2">Email:</strong> <span className="px-2 py-1 rounded">rizvin@gmail.com</span></p>
              <p><strong className="mr-2">Qualification :</strong> <span className="px-2 py-1 rounded">Mca</span></p>
              <p><strong className="mr-2">Address:</strong> <span className="px-2 py-1 rounded">123 Main St, City, Country</span></p>
              <p><strong className="mr-2">Phone:</strong> <span className="px-2 py-1 rounded">7034167942</span></p>
            </div>
          </div>
        </div>
      </div>


      {/* Second Row */}
      <div className="flex flex-wrap">
        <div className="sm:w-2/6  p-3">
          {/* Container 3 */}
          <div className="bg-slate-50 p-3 rounded-lg flex-1 shadow-md hover:shadow-lg">
            <h2 className="text-center mb-4 font-bold text-xl">Social Links</h2>
            <ul>
              <li className="mb-3">
               
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  <strong>Github:</strong> <span className=" px-2 py-1 rounded"><a href="https://github.com/" target="_blank" rel="noopener noreferrer">  github.com/user
                </a></span>
              </li>
              <li className="mb-3">
                
                  <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                  <strong>LinkedIn:</strong><span className=" px-2 py-1 rounded"><a href="https://www.linkedin.com/in/fathima-mirza-2119b826a/" target="_blank" rel="noopener noreferrer">  linkedin.com/in/user
                </a></span>
              </li>
              <li className="mb-3">
                  <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                  <strong>Twitter:</strong><span className=" px-2 py-1 rounded"><a href="https://www.linkedin.com/in/fathima-mirza-2119b826a/" target="_blank" rel="noopener noreferrer"> twitter.com/user
                </a></span>
              </li>
              <li className="mb-3">
                
                  <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                  <strong>Facebook:</strong><span className=" px-2 py-1 rounded"><a href="https://www.linkedin.com/in/fathima-mirza-2119b826a/" target="_blank" rel="noopener noreferrer"> facebook.com/user
                </a></span>
              </li>
              <li className="mb-3">
                
                  <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                  <strong>Instagram:</strong><span className=" px-2 py-1 rounded"> <a href="https://www.linkedin.com/in/fathima-mirza-2119b826a/" target="_blank" rel="noopener noreferrer"> instagram.com/user</a></span>
                
              </li>
            </ul>
          </div>
        </div>

        <div className="w-2/6 p-3">
          {/* Container 4 */}
          <div className="bg-slate-50 p-3 rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-center mb-2 font-bold text-xl">Skills</h2>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>

        <div className="w-2/6 p-3">
          {/* Container 5 */}
          <div className="bg-slate-50 p-3 rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-center mb-2 font-bold text-xl">Projects</h2>
            <ul>
              <li>Project 1</li>
              <li>Project 2</li>
              <li>Project 3</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="m-4 flex justify-end">
        <button
          className="text-white bg-indigo-500 rounded-lg px-3 py-2 text-base border-none cursor-pointer hover:bg-indigo-950"
          onClick={toggleModal}
        >
          Update Profile
        </button>
      </div>

     {/* Modal */}
     {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg w-2/5">
      <h2 className="text-xl font-bold mb-4 text-center">Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex items-center">
          <label htmlFor="name" className="block mb-2 mr-4">Qualification:</label>
          <input type="text" id="qualification" name="qualification" value={formData.qualification} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 h-8 w-72" />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="address" className="block mb-2 mr-4">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 h-8 w-72" />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="phone" className="block mb-2 mr-4">Phone Number:</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 h-8 w-72" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-center">Social Links</h3>
        <div className="mb-4 flex items-center">
          <label htmlFor="github" className="block mb-2 mr-4">GitHub:</label>
          <input type="text" id="github" name="github" value={formData.github} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 h-8 w-72" />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="linkedin" className="block mb-2 mr-4">LinkedIn:</label>
          <input type="text" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 h-8 w-72" />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="twitter" className="block mb-2 mr-4">Twitter:</label>
          <input type="text" id="twitter" name="twitter" value={formData.twitter} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 h-8 w-72" />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="facebook" className="block mb-2 mr-4">Facebook:</label>
          <input type="text" id="facebook" name="facebook" value={formData.facebook} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 h-8 w-72" />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="instagram" className="block mb-2 mr-4">Instagram:</label>
          <input type="text" id="instagram" name="instagram" value={formData.instagram} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 h-8 w-72" />
        </div>
        <div className="flex justify-between"> {/* Use flexbox to align buttons */}
          <div>
            <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md">Save</button>
          </div>
          <div>
            <button type="button" className="bg-gray-300 text-gray-800 ml-2 px-4 py-2 rounded-md" onClick={toggleModal}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
)}





    </div>
  );
};

export default ProfilePages;
