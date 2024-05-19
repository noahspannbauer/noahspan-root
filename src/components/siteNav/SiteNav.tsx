import { Button, Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Logo } from '@noahspan/noahspan-components';

const SiteNav: React.FC<unknown> = () => {
    return (
        <Navbar isBordered>
            <NavbarBrand>
                <Logo height={45} width={45} />
            </NavbarBrand>
            <NavbarContent justify="center">

            </NavbarContent>
            <NavbarContent justify="end">
                {/* {!isAuthenticated && */}
                    <Button as={Link} color='primary' href='#' >Login</Button>
                {/* } */}
                {/* {isAuthenticated && */}
                    {/* <Avatar name={accounts[0]?.username} /> */}
                {/* } */}
            </NavbarContent>
        </Navbar>
    )
}

export default SiteNav;