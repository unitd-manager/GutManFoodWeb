import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import api from "../../constants/api"; // Ensure you have your API setup
import imageBase from "../../constants/imageBase";

var img = require('./../../images/banner/bnr1.jpg');

const Blogsingle = () => {
  const { blogId } = useParams(); // Get blog ID from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (!blogId) return;

    console.log("Fetching blog with ID:", blogId);

    api.post('/blog/getBlogById', { blog_id: blogId })
      .then(response => {
        setBlog(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching blog:", error);
      });
  }, [blogId]);

  if (!blog) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* Blog Content */}
        <div className="section-full bg-white content-inner-2">
          <div className="container">
            <div className="row">
              {/* Blog Post Section */}
              <div className="col-lg-8">
                <div className="blog-post blog-single sidebar">
                  <div className="dlab-post-media dlab-img-effect zoom-slow radius-sm">
                    {blog[0].file_name && blog[0].file_name.length > 0 && (
                      <img
                        src={`${imageBase}${blog[0].file_name}`}
                        className="img-cover radius-sm"
                        alt={blog[0].title || "Blog Image"}
                      />
                    )}
                  </div>
                  <div className="dlab-post-info">
                    <div className="dlab-post-title">
                      <h2 className="post-title">{blog[0].title}</h2>
                    </div>
                    <div className="dlab-post-meta">
                      <ul>
                        <li className="post-author">
                          <Link to="#">Gut Man</Link>
                        </li>
                        <li className="post-date">
                          {new Date(blog[0].creation_date).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'numeric',
                            year: 'numeric'
                          })}
                        </li>
                      </ul>
                    </div>
                    <div className="dlab-post-text">
                      <p className="main-text" dangerouslySetInnerHTML={{ __html: blog[0].description }}></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Section */}
              <div className="col-lg-4 sticky-top">
                <aside className="side-bar">
                  {/* Tags Widget */}
                  <div className="widget widget_tag_cloud radius">
                    <h5 className="widget-title style-1">Tags</h5>
                    <div className="tagcloud">
                    {blog[0].tags}
                    </div>

                  </div>
                </aside>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogsingle;
