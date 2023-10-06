import React from "react";
import styles from "../../styles/components/Blog.module.css";
import avatar from '../../assets/images/avatar.png'
import { FaUser, FaCalendar } from "react-icons/fa";

const Blog = () => {
  return (
    <div className={styles.blog_container}>
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  );
};

const BlogItem = () => {
  return <div className={styles.blog_item}>
     <div className={styles.avatar}>
        <img src={avatar} alt="" />
     </div>
     <div className={styles.details_container}>
        <h4>"Odlar Yurdu" university</h4>
        <div className={styles.details}>
            <span>
               Aysel Mammadova
            </span>
            <span>
                June 18 / 2023 18:23
            </span>
        </div>
     </div>
  </div>;
};

export default Blog;
