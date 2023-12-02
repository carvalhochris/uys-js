import "react-cmdk/dist/cmdk.css";
import CommandPalette, {
  filterItems,
  getItemIndex,
  useHandleOpenCommandPalette,
} from "react-cmdk";
import { useEffect, useState } from "react";
import React from "react";

const Command = () => {
  const [page, setPage] = useState<"root" | "projects">("root");
  const [open, setOpen] = useState<boolean>(true);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.metaKey && e.key === "k") {
        e.preventDefault();
        e.stopPropagation();

        setIsOpen((currentValue) => {
          return !currentValue;
        });
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const filteredItems = filterItems(
    [
      {
        heading: "Home",
        id: "home",
        items: [
          {
            id: "home",
            children: "Home",
            icon: "HomeIcon",
            href: "/",
          },
          {
            id: "free",
            children: "Free",
            icon: "CogIcon",
            href: "/free",
          },
          {
            id: "info",
            children: "Info",
            icon: "CogIcon",
            href: "/free",
          },
        ],
      },
      // {
      //   heading: "Other",
      //   id: "advanced",
      //   items: [
      //     {
      //       id: "developer-settings",
      //       children: "Developer settings",
      //       icon: "CodeBracketIcon",
      //       href: "#",
      //     },
      //     {
      //       id: "privacy-policy",
      //       children: "Privacy policy",
      //       icon: "LifebuoyIcon",
      //       href: "#",
      //     },
      //     {
      //       id: "log-out",
      //       children: "Log out",
      //       icon: "ArrowRightOnRectangleIcon",
      //       onClick: () => {
      //         alert("Logging out...");
      //       },
      //     },
      //   ],
      // },
    ],
    search
  );

  return (
    <CommandPalette
      onChangeSearch={setSearch}
      onChangeOpen={setOpen}
      search={search}
      isOpen={isOpen}
      page={page}
    >
      <CommandPalette.Page id="root">
        {filteredItems.length ? (
          filteredItems.map((list) => (
            <CommandPalette.List key={list.id} heading={list.heading}>
              {list.items.map(({ id, ...rest }) => (
                <CommandPalette.ListItem
                  key={id}
                  index={getItemIndex(filteredItems, id)}
                  {...rest}
                />
              ))}
            </CommandPalette.List>
          ))
        ) : (
          <CommandPalette.FreeSearchAction />
        )}
      </CommandPalette.Page>

      {/* <CommandPalette.Page id="projects"> */}
        {/* Projects page */}
      {/* </CommandPalette.Page> */}
    </CommandPalette>
  );
};

export default Command;
