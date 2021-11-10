import React from "react";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright teal darken-2">
        <div className="container">
          © {new Date().getFullYear()} Copyright Elena Riemer
          <a className="grey-text text-lighten-4 right" href="#!">
            <button
              className="btn teal lighten-1"
              title="Go to top"
              onClick={() => scrollToTop()}
            >
              <i className="material-icons">arrow_upward</i>
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
}
