import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0,
};

const imagesLoadedOptions = { background: '.my-bg-image-el' };

class Bloggrid extends Component {
  render() {
    const { blogs, searchResults } = this.props;

    // Use searchResults if available, otherwise use blogs
    const displayBlogs = searchResults.length > 0 ? searchResults : blogs;

    return (
      <div className="dlab-blog-grid-2" id="masonry" style={{ width: "100%" }}>
        <Masonry
          className={'my-gallery-class'} // default ''
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
          {displayBlogs.map((blog, index) => (
            <div
              className="post card-container col-lg-4 col-md-4 col-sm-12"
              key={index}
              style={{
                padding: "15px", // Add padding for spacing between boxes
              }}
            >
                <div
                className="blog-post blog-grid blog-rounded blog-effect1"
                style={{
                  height: "100%", // Ensure all boxes have the same height
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #e0e0e0", // Optional: Add a border
                  borderRadius: "8px", // Optional: Add rounded corners
                  overflow: "hidden", // Ensure content doesn't overflow
                }}
              >
                <div className="dlab-post-media dlab-img-effect">
                  <Link to={`/blog-single/${blog.blog_id}`}>
                    <img
                      src={`https://gutmanfoodsadmin.unitdtechnologies.com/storage/uploads///${blog.file_name}`}
                      alt={blog.title}
                      style={{
                        width: "100%",
                        height: "200px", // Fixed height for images
                        objectFit: "cover", // Ensure images fill the container
                      }}
                    />
                  </Link>
                </div>
				<div
                  className="dlab-info"
                  style={{
                    flex: 1, // Ensure the content stretches to fill the height
                    padding: "15px", // Add padding for better spacing
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between", // Space out content evenly
                  }}
                >
                  <div className="dlab-post-title">
                    <h4 className="post-title">
                      <Link to={`/blog-single/${blog.blog_id}`}>{blog.title}</Link>
                    </h4>
                  </div>
                  <div className="dlab-post-meta">
                    <div className="post-author-thumb">
                      <img
                        src={require('./../../images/testimonials/pic1.jpg')}
                        alt=""
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%", // Make the author image round
                        }}
                      />
                    </div>
                    <ul>
                      <li className="post-author">
                        <Link to={''}>{blog.author}</Link>
                      </li>
                      <li className="post-date">{new Date(blog.date).toLocaleDateString()}</li>
                    </ul>
                  </div>
				  <div className="dlab-post-text">
				  <p>{blog.description
          ? ReactHtmlParser(blog.description)
          : "No description available."}</p>
                    {/* <p>{blog.description}</p> */}
                  </div>
                  <div className="dlab-post-readmore">
                    <Link
                      to={`/blog-single/${blog.blog_id}`}
                      title="READ MORE"
                      rel="bookmark"
                      className="btn btn-sm btn1 btnhover"
                    >
                      <i className="fa fa-angle-right"></i>READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="pagination-bx clearfix primary rounded-sm col-md-12 text-center">
            <ul className="pagination">
              <li className="previous">
                <Link to={''}>
                  <i className="ti-arrow-left"></i> Prev
                </Link>
              </li>
              <li className="active">
                <Link to={''}>1</Link>
              </li>
              <li>
                <Link to={''}>2</Link>
              </li>
              <li>
                <Link to={''}>3</Link>
              </li>
              <li className="next">
                <Link to={''}>
                  Next <i className="ti-arrow-right"></i>
                </Link>
              </li>
            </ul>
          </div>
        </Masonry>
      </div>
    );
  }
}

export default Bloggrid;