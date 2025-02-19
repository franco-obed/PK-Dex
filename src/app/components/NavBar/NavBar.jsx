"use client";
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
import { Spacer } from "@heroui/spacer";
import { useDisclosure } from "@heroui/modal";

export const AcmeLogo = () => {
  return (
    <>
      <Image
        isZoomed
        src={"/pokemon-icon.png"}
        alt={"Pokeball-Icon"}
        width={24}
        height={24}
      />
    </>
  );
};

export default function NavBar(props) {
  return (
    <Navbar isBordered>
      <Link href={"/"} color={"foreground"}>
        <NavbarBrand>
          <AcmeLogo />
          <Spacer x={2} />
          <p className="font-bold text-inherit">PK Dex</p>
        </NavbarBrand>
      </Link>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/type-calculator">
            Type Calculator
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
          <Button color={"default"} onPress={props.onPress}>
            Login
          </Button>
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
