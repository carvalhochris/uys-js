import { Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";
import "react-cmdk/dist/cmdk.css";

const Command = () => {
  const [page, setPage] = useState<"root" | "projects">("root");
  const [open, setOpen] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState([]);
  const [theLength, setTheLength] = useState<number>();
  const router = useRouter();

  const handleClick = (props: string) => {
    setIsOpen(false);
    router.push(`/${props}`);
  };

  const handleSearch = async () => {
    console.log("searching..." + searchTerm);
    setLoading(true);
    // event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("https://unlockyoursound.io/graphql", {
        query: `
        query SearchPosts($search: String!) {
          posts(first: 1000, where: { search: $search }) {
            nodes {
              id
              title
              slug
              seo {
                metaDesc
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      `,
        variables: { search: searchTerm },
      });
      setSearchResults(response.data.data.posts.nodes);
      const length = searchResults.length;
      setTheLength(length);
      console.log("the length is  " + length);
      console.log(searchResults);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // console.log(searchTerm);

  useEffect(() => {
    // handleSearch();
    function handleKeyDown(e: KeyboardEvent) {
      if (e.metaKey && e.key === "k") {
        e.preventDefault();
        e.stopPropagation();

        setIsOpen((currentValue) => {
          return !currentValue;
        });
      }
      if (e.key === "Escape") {
        console.log("escape");
        setIsOpen(false);
        e.preventDefault();
        e.stopPropagation();
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
            href: "/christopher-carvalho",
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
    searchTerm
  );

  return (
    <CommandPalette
      onChangeSearch={setSearchTerm}
      onChangeOpen={setOpen}
      search={searchTerm}
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
          <>
            {/* <p>hello</p> */}
            <CommandPalette.FreeSearchAction onClick={handleSearch} />
            {loading && <Spinner color="white" />}
            <CommandPalette.List>
              {searchResults.map(
                (data: { title: string; slug: string; id: number }, index) => (
                  <div key={data.id}>
                    <CommandPalette.ListItem
                      key={data.id}
                      index={index + 1}
                      // {...rest}
                      onClick={() => handleClick(data.slug)}
                    >
                      <Link href={`/${data.slug}`}>
                        <Text color="white" mt={2} mb={2}>
                          {data.title}
                        </Text>
                      </Link>
                    </CommandPalette.ListItem>
                  </div>
                )
              )}
            </CommandPalette.List>
            {/* <>Hello page</> */}
          </>
        )}
      </CommandPalette.Page>
      <CommandPalette.Page id="search">
        <>new page child</>
        <>Hello page</>
      </CommandPalette.Page>

      {/* <CommandPalette.Page id="projects"> */}
      {/* Projects page */}
      {/* </CommandPalette.Page> */}
    </CommandPalette>
  );
};

export default Command;
