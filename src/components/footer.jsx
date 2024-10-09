import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary-foreground text-secondary">
      <p className="text-center p-4 border-t border-secondary/5 text-sm">
        &copy; {new Date().getFullYear()} Neocase, Inc. Copyright and rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
