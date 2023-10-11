import React from "react";
import "../../styles/components/UserProfile.css";
import "animate.css";
import BlogIcon from "../../assets/icons/File_Add.svg";
import UserIcon from "../../assets/icons/User_03.svg";
import LogoutIcon from "../../assets/icons/Log_Out.svg";
import VacancyIcon from "../../assets/icons/Note_Edit.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth";
import { useNavigate } from "react-router-dom";


const userDropdown = [
  {
    icon: UserIcon,
    value: "Profile",
  },
  {
    icon: BlogIcon,
    value: "Add Blog",
  },
  {
    icon: VacancyIcon,
    value: "Add Vacancy",
  },
  {
    icon: LogoutIcon,
    value: "Logout",
  },
];




const UserProfile = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleSelect = (e) => {
    if ((e.target.textContent === "Logout")) {
      dispatch(logout())
      navigate('/')
    };
    if ((e.target.textContent === "Profile")) {
      console.log('/profile');
      navigate('/profile')
    };
    if ((e.target.textContent === "Add Blog")) {
      console.log('/add blog');
      navigate('/add-blog')
    };
    if ((e.target.textContent === "Add Vacancy")) {
      console.log('/Add Vacancy');
      navigate('/add-vacancy')
    };

  }
  return (
    <div className="user_container animate__animated animate__fadeInRight">
      <div className="user_profile">
        <ul className="user_menu">
          {userDropdown.map(data => (
            <UserProfileItem data={data} onSelect={handleSelect} key={data.icon} />
          ))}

        </ul>
      </div>
    </div>
  );
};
const UserProfileItem = ({ data, onSelect }) => {
  return (
    <li className="user_item" onClick={(e) => onSelect(e)}>
      <img src={data.icon} alt="" />
      {data.value}
    </li>
  )
};

export default UserProfile;
