"use client";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Link href="/" passHref>
        <Image
          src="https://i.ibb.co/McdzmYG/logo-removebg-preview-new.png"
          width={70}
          height={70}
          alt="Logo"
        />
      </Link>

      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="custom-toggler"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <div
            className="menu"
            style={{ display: "flex", marginRight: "50px" }}
          >
            <Link className="custom-link" href="/login" passHref>
              Home
            </Link>
            <Link className="custom-link" href="/login" passHref>
              TV
            </Link>{" "}
            <Link className="custom-link" href="/login" passHref>
              Movie
            </Link>{" "}
            <Link className="custom-link" href="/login" passHref>
              Sports
            </Link>
            <Link className="custom-link" href="/login" passHref>
              News
            </Link>
            <div className="searchicon" style={{ margin: "5px 18px" }}>
              <BsSearch />
            </div>
          </div>
          <Link className="custom-link" href="/login" passHref>
            Log in
          </Link>
          <Link className="custom-link" href="/signup" passHref>
            Sign up
          </Link>
          {/* <Link className="custom-link" href="/contact" passHref>
            Contact
          </Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
