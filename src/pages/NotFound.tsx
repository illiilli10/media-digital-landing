import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-200)' }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-200)', marginBottom: '1rem' }}>Oops! Page not found</p>
        <a href="/" style={{ color: 'var(--primary-100)', textDecoration: 'underline' }}>Go Home</a>
      </div>
    </div>
  );
};

export default NotFound;
