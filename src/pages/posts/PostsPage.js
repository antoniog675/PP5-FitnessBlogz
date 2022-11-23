import React, { useEffect, useState } from "react";
import Asset from "../../components/Asset"

import { Form, Col, Row, Container } from "react-bootstrap";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

import NoResults from '../../assets/no-results.jpg'
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";

// Posts page will render the feed, will render all the posts that have been submitted, will have an infinite scroll
// to improve user experience, no more pagination
// Handles if there are posts, handles if posts are still loading, handles if there are no comments


function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });

  const [hasLoaded, setHasLoaded] = useState(false);

  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`)
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    }

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000)
    return () => {
      clearTimeout(timer);
    }
  }, [filter, query, pathname]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
        </Form>
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              <InfiniteScroll
                children={
                  posts.results.map(post => (
                    <Post key={post.id} {...post} setPosts={setPosts} />
                  ))
                }
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : <Container className={appStyles.Content}>
              <Asset src={NoResults} message={message} />
            </Container>}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostsPage;