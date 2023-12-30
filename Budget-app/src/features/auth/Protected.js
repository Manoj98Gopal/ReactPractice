import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ children }) {
  const [isSession, setIsSession] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function checkSession() {
      const sessionExist = false;

      if (sessionExist) {
        setIsSession(true);
      } else {
        setIsSession(false);
        navigate("/admin-login");
      }
    }

    checkSession();
  }, []);

  if (!isSession) {
    return (
      <div className="center-content">
        <h3>Loading .....</h3>
      </div>
    );
  }

  return children;
}

export default Protected;
