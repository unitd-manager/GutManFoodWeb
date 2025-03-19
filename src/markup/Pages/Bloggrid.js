import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0,
};

const imagesLoadedOptions = { background: '.my-bg-image-el' };

class Bloggrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      blogsPerPage: 6,
    };
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { blogs, searchResults } = this.props;
    const { currentPage, blogsPerPage } = this.state;
    
    const displayBlogs = searchResults.length > 0 ? searchResults : blogs;
    const totalPages = Math.ceil(displayBlogs.length / blogsPerPage);

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = displayBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    return (
      <div className="dlab-blog-grid-2" id="masonry" style={{ width: "100%" }}>
        <Masonry className={'my-gallery-class'} options={masonryOptions} disableImagesLoaded={false} imagesLoadedOptions={imagesLoadedOptions}>
          {currentBlogs.map((blog, index) => (
            <div className="post card-container col-lg-4 col-md-4 col-sm-12" key={index} style={{ padding: "15px" }}>
              <div className="blog-post blog-grid blog-rounded blog-effect1" style={{ height: "100%", display: "flex", flexDirection: "column", border: "1px solid #e0e0e0", borderRadius: "8px", overflow: "hidden" }}>
                <div className="dlab-post-media dlab-img-effect">
                  <Link to={`/blogDetail/${blog.blog_id}`}>
                    <img src={`https://gutmanfoodsadmin.unitdtechnologies.com/storage/uploads///${blog.file_name}`} alt={blog.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                  </Link>
                </div>
                <div className="dlab-info" style={{ flex: 1, padding: "15px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div className="dlab-post-title">
                    <h4 className="post-title">
                    <Link to={`/blogDetail/${blog.blog_id}`}>
                        {blog.title.split(" ").slice(0, 2).join(" ") + (blog.title.split(" ").length > 2 ? "..." : "")}
                      </Link>

                    </h4>
                  </div>
                  <div className="dlab-post-text">
                  <p>
  {blog.description
    ? ReactHtmlParser(blog.description.split(" ").slice(0, 10).join(" ") + (blog.description.split(" ").length > 10 ? "..." : ""))
    : "No description available."}
</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Masonry>

        <div className="pagination-bx clearfix primary rounded-sm col-md-12 text-center">
          <ul className="pagination">
            <li className={`previous ${currentPage === 1 ? 'disabled' : ''}`}>
              <button onClick={() => this.handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                <i className="ti-arrow-left"></i> Prev
              </button>
            </li>
            {[...Array(totalPages).keys()].map((number) => (
              <li key={number + 1} className={currentPage === number + 1 ? 'active' : ''}>
                <button onClick={() => this.handlePageChange(number + 1)}>{number + 1}</button>
              </li>
            ))}
            <li className={`next ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button onClick={() => this.handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next <i className="ti-arrow-right"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Bloggrid;
