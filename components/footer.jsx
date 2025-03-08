import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.contactContainer}>
        <h4 style={styles.contactTitle}>Contact Details</h4>
        <p style={styles.contactInfo}>Phone: +9189$#484848</p>
        <p style={styles.contactInfo}>Email: xyz@gmail.com</p>
        <p style={styles.address}>Address: xyz street near market</p>
      </div>
      <div style={styles.thankYouContainer}>
        <p style={styles.thankYouMessage}>Thank you for choosing our services!</p>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderTop: "1px solid #ccc",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  contactContainer: {
    marginBottom: "15px",
  },
  contactTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  contactInfo: {
    fontSize: "14px",
    margin: "5px 0",
  },
  address: {
    fontSize: "14px",
    margin: "10px 0",
  },
  thankYouContainer: {
    marginTop: "15px",
  },
  thankYouMessage: {
    fontSize: "16px",
    fontStyle: "italic",
    color: "#333",
  },
};

export default Footer;
