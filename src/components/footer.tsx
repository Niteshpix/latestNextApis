import React from "react";
import footerStyles from "@/app/styles/footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

interface Metadata {
  url: string;
}

export const metadata: Metadata = {
  url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
};

const Footer: React.FC = () => {
  return (
    <>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.content}>
          <div className={footerStyles.top}>
            <div className={footerStyles["logo-details"]}>
              {/*<i className={footerStyles.fab fa-slack]></i>*/}
              <span className={footerStyles.logo_name}>Title</span>
            </div>
            <div className={footerStyles["media-icons"]}>
              <Link href="#">
                <i>
                  {" "}
                  <FaFacebookF />{" "}
                </i>
              </Link>
              <Link href="#">
                <i>
                  {" "}
                  <FaTwitter />{" "}
                </i>{" "}
              </Link>
              <Link href="/" target="_blank">
                <i>
                  {" "}
                  <FaInstagram />{" "}
                </i>
              </Link>
              <Link href="#">
                <i>
                  {" "}
                  <FaLinkedinIn />{" "}
                </i>
              </Link>
              <Link href="#">
                <i>
                  {" "}
                  <FaYoutube />{" "}
                </i>
              </Link>
            </div>
          </div>
          <div className={footerStyles["link-boxes"]}>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Company</li>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Contact us</Link>
              </li>
              <li>
                <Link href="#">About us</Link>
              </li>
              <li>
                <Link href="#">Get started</Link>
              </li>
            </ul>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Services</li>
              <li>
                <Link href="#">App design</Link>
              </li>
              <li>
                <Link href="/jscompiler">Web design</Link>
              </li>
              <li>
                <Link href="#">Logo design</Link>
              </li>
              <li>
                <Link href="#">Banner design</Link>
              </li>
            </ul>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Account</li>
              <li>
                <Link href="#">Profile</Link>
              </li>
              <li>
                <Link href="#">My account</Link>
              </li>
              <li>
                <Link href="#">Preferences</Link>
              </li>
              <li>
                <Link href="#">Purchase</Link>
              </li>
            </ul>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Courses</li>
              <li>
                <Link href="/jscompiler">HTML & CSS</Link>
              </li>
              <li>
                <Link href="/jscompiler">JavaScript</Link>
              </li>
              <li>
                <Link href="#">Photography</Link>
              </li>
              <li>
                <Link href="#">Photoshop</Link>
              </li>
            </ul>
            <ul className={`${footerStyles.box} ${footerStyles["input-box"]}`}>
              <li className={footerStyles.link_name}>Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div className={footerStyles["bottom-details"]}>
          <div className={footerStyles.bottom_text}>
            <span className={footerStyles.copyright_text}>
              {" "}
              Copyright © 2023
              <Link href="/"> Nits</Link> All rights reserved
            </span>
            <span className={footerStyles.policy_terms}>
              <Link href="/">Privacy policy</Link>
              <Link href="/">Terms & condition</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
