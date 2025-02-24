import React from 'react';

const dummyPosts = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=300&q=60',
    link: 'https://instagram.com',
    caption: 'Delicious Pizza',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1553163147-622ab57e14a7?auto=format&fit=crop&w=300&q=60',
    link: 'https://instagram.com',
    caption: 'Fresh Salad',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=60',
    link: 'https://instagram.com',
    caption: 'Tasty Burger',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1612874740700-23a8a0bfe7e8?auto=format&fit=crop&w=300&q=60',
    link: 'https://instagram.com',
    caption: 'Sushi Platter',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1604908177528-d4a6d2eb7d81?auto=format&fit=crop&w=300&q=60',
    link: 'https://instagram.com',
    caption: 'Creamy Pasta',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=300&q=60',
    link: 'https://instagram.com',
    caption: 'Fresh Juices',
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1566843979283-0b7a8e94653e?auto=format&fit=crop&w=300&q=60',
    link: 'https://instagram.com',
    caption: 'Assorted Snacks',
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=60',
    link: 'https://instagram.com',
    caption: 'Homemade Cake',
  },
];

const DummyInstagramFeed = () => {
  return (
    <div style={{ padding: "2rem 0", backgroundColor: "#f9f9f9" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
          fontSize: "2rem",
          color: "#333",
        }}
      >
        Follow Us on Instagram
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "15px",
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
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={post.image}
              alt={post.caption}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
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
  );
};

export default DummyInstagramFeed;
