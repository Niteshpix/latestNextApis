"use client";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
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
          <Link className="custom-link" href="/login" passHref>
            Log in
          </Link>
          <Link className="custom-link" href="/signup" passHref>
            Sign up
          </Link>
          <Link className="custom-link" href="/contact" passHref>
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
