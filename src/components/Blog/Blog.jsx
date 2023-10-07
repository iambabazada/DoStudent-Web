import React, { useEffect, useState } from "react";
import styles from "../../styles/components/Blog.module.css";
import avatar from '../../assets/images/avatar.png'
import { FaUser, FaCalendar } from "react-icons/fa";

const Blog = ({ users }) => {


  return (
    <div className={styles.blog_container}>
      {users?.slice(0, 3).map((user, index) => (
        <BlogItem key={index} user={user} />
      ))}
    </div>
  );
};

const BlogItem = ({ user }) => {
  return <div className={styles.blog_item}>
    <div className={styles.avatar}>
      <img src={avatar} alt="" />
    </div>
    <div className={styles.details_container}>
      <h4>{user?.email}</h4>
      <div className={styles.details}>
        <span>
          {user?.name}
        </span>
        <span>
          {user?.website}
        </span>
      </div>
    </div>
  </div>;
};

export default Blog;
