import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
// import PokemonIcon from "./pokemon-icon.svg";

export const AcmeLogo = () => {
  return (
    <>
      <Image
        isZoomed
        src={"/pokemon-icon.png"}
        alt={"Pokeballs Icons"}
        width={24}
        height={24}
      />
    </>
  );
};

export default function NavBar() {
  return (
    <Navbar isBordered>
      <AcmeLogo />

      <NavbarBrand>
        <p className="font-bold text-inherit">PK Dex</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
