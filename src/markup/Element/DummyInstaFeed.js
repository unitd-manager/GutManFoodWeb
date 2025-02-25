import React from 'react';

const dummyPosts = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=300&q=60',
    link: 'https://instagram.com',
    caption: 'Healthy for Diabetics',
  },
  {
    id: 2,
    image:
      'https://m.media-amazon.com/images/I/61f0XAJtJnL.UF1000,1000_QL80.jpg',
    link: 'https://instagram.com',
    caption: 'Keto Diet',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=60',
    link: 'https://instagram.com',
    caption: 'Delicious Pizza',
  },
  {
    id: 4,
    image:
      'https://www.mayoclinichealthsystem.org/-/media/national-files/images/hometown-health/2021/items-promoting-healthy-weight.jpg?sc_lang=en&hash=9C54C2EEB9D5163EC0823F673962A339',
    link: 'https://instagram.com',
    caption: 'Balanced Weight Reduction',
  },
  {
    id: 5,
    image:
      'https://drbest.in/wp-content/uploads/2019/07/001.jpg',
    link: 'https://instagram.com',
    caption: 'Essential Health Boosters',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=300&q=60',
    link: 'https://instagram.com',
    caption: 'Nourishing Munchies',
  },
  {
    id: 7,
    image:
      'https://www.makeaheadmealmom.com/wp-content/uploads/2019/09/EasyBreakfastPastries_FeaturedImage_Compressed.jpg',
    link: 'https://instagram.com',
    caption: 'Guiltfree Pastries',
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=60',
    link: 'https://instagram.com',
    caption: 'Wholesome Nibbles',
  },
];

const DummyInstagramFeed = () => {
  return (
    <div style={{ padding: "2rem 0", backgroundColor: "#f9f9f9" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            marginBottom: "1.5rem",
            fontSize: "2rem",
            color: "#a020f0",
          }}
        >
          Follow Us on Instagram
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "35px",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          {dummyPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                width: "100%",
                height: "200px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={post.image}
                alt={post.caption}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "8px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  background: "rgba(0,0,0,0.5)",
                  color: "#fff",
                  padding: "0.5rem",
                  textAlign: "center",
                  fontSize: "0.9rem",
                }}
              >
                {post.caption}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DummyInstagramFeed;
