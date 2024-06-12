import lamaiaLogo from "../public/images/image.png"
const Navbar = () => {
    return (
      <nav className="bg-blue-200 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <NavbarBrand>
            <lamaiaLogo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="/home">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/shop">
                Shop
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/about-us">
                About Us
              </Link>
            </NavbarItem>
          </NavbarContent>
        </div>
      </nav>
    );
  };
  
  export default Navbar;