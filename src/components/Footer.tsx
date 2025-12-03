import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/trripah-logo.png";
import styles from "./Footer.module.css";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brandSection}>
            <div className={styles.logoContainer}>
              <img src={logo} alt="trripah" className={styles.logo} />
            </div>
            <p className={styles.description}>
              Your gateway to unforgettable journeys. Curated trips, expert support, hassle-free bookings.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://instagram.com/trripah.travel"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Youtube className="w-5 h-5" />
              </a>
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Facebook className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <button
                  onClick={() => onNavigate("destinations")}
                >
                  Destinations
                </button>
              </li>
              <li className={styles.linkItem}>
                <button
                  onClick={() => onNavigate("packages")}
                >
                  Packages
                </button>
              </li>
              <li className={styles.linkItem}>
                <button
                  onClick={() => onNavigate("custom-trip")}
                >
                  Custom Trip Builder
                </button>
              </li>
              <li className={styles.linkItem}>
                <button
                  onClick={() => onNavigate("blog")}
                >
                  Travel Blog
                </button>
              </li>
              <li className={styles.linkItem}>
                <button
                  onClick={() => onNavigate("reviews")}
                >
                  Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.section}>
            <h4>Company</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <button
                  onClick={() => onNavigate("about")}
                >
                  About Us
                </button>
              </li>
              <li className={styles.linkItem}>
                <a href="#">
                  Terms & Conditions
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#">
                  Privacy Policy
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#">
                  Refund Policy
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#">
                  Cancelation policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.section}>
            <h4>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <div>
                  <a href="tel:+917676355255" className={styles.contactLink}>
                    +91 7676 355 255
                  </a>
                </div>
              </li>
              <li className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <div>
                  <a href="mailto:hello@trripah.com" className={styles.contactLink}>
                    trripah@gmail.com
                  </a>
                </div>
              </li>
              <li className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <div className={styles.contactText}>
                  Tejas Arcade, 527/B, Dr Rajkumar Rd, A Block, Milk Colony, 2nd Stage, Rajajinagar, Bengaluru, Karnataka 560010
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divider}>
          <p>&copy; 2025 trripah. All rights reserved. Made with ❤️ for travelers.</p>
        </div>
      </div>
    </footer>
  );
}