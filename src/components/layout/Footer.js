      import React from "react";
      import { FaArrowUp } from "react-icons/fa"; // Import arrow icon
      import "./../../styles/footer.css";

      const Footer = () => {
        return (
          <footer className="footer">
            <p>© 2025 Sruthi V S. All Rights Reserved.</p>
            <a href="/" className="arrow-btn">
              <FaArrowUp />
            </a>
          </footer>
        );
      };

      export default Footer;
