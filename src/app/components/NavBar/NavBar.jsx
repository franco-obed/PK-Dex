"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Spacer } from "@heroui/spacer";
import { useDisclosure } from "@heroui/modal";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignupModal";

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

export default function NavBar() {
  const {
    onOpenChange: onLoginOpenChange,
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();

  const {
    onOpenChange: onSignUpOpenChange,
    isOpen: isSignUpOpen,
    onOpen: onSignUpOpen,
    onClose: onSignUpClose,
  } = useDisclosure();

  return (
    <>
      <Navbar isBordered>
        <Link href={"/"} color={"foreground"}>
          <NavbarBrand>
            <AcmeLogo />
            <Spacer x={2} />
            <p className="font-bold text-inherit">PK 💖</p>
          </NavbarBrand>
        </Link>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/type-calculator">
              Pokemon
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
            <Button color={"default"} onPress={onLoginOpen}>
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="flat"
              onPress={onSignUpOpen}
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <LoginModal
        isOpen={isLoginOpen}
        onOpenChange={onLoginOpenChange}
        onClose={onLoginClose}
      />
      <SignUpModal
        isOpen={isSignUpOpen}
        onOpenChange={onSignUpOpenChange}
        onClose={onSignUpClose}
      />
    </>
  );
}
