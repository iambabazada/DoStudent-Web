import React from "react";
import "../../styles/components/UserProfile.css";
import "animate.css";
import BlogIcon from "../../assets/icons/File_Add.svg";
import UserIcon from "../../assets/icons/User_03.svg";
import LogoutIcon from "../../assets/icons/Log_Out.svg";
import VacancyIcon from "../../assets/icons/Note_Edit.svg";

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
  return (
    <div className="user_container animate__animated animate__fadeInRight">
      <div className="user_profile">
        <ul className="user_menu">
           {userDropdown.map(data => (
             <UserProfileItem data={data} key={data.icon}/>
           ))}
           
        </ul>
      </div>
    </div>
  );
};
const UserProfileItem = ({data}) => {
  return <li className="user_item">
      <img src={data.icon} alt="" />
      {data.value}
  </li>;
};

export default UserProfile;
