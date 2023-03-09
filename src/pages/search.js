import { Container } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Search from "@/components/SearchBox";
import Nav from "@/components/Nav";

export default function SearchPage() {
    return (
        <div className={styles.main}>
            <Container maxW="xl">
            <Nav />
                {/* <h1>Hello search</h1> */}
                <Search />
            </Container>
        </div>
    );
}