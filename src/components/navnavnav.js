import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Button,
//   Link,
  Text,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ExternalLinkIcon,
  EditIcon,
  RepeatIcon,
  AddIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import Link from 'next/link'

export default function NavNavNav() {
  return (
    <div>
      <Link href="/">
        <Text>Home</Text>
      </Link>
      <Link href="/about">
        <Text>About</Text>
      </Link>
      {/* <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu> */}
    </div>
  );
}
