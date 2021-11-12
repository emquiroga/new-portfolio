import { useState } from "react"

export const useModal = (links) => {
    const [modal, setModal] = useState(false);
    const [live, setLive] = useState("");
    const [repo, setRepo] = useState("");
  
    const getLinks = (event) => {
      let id = event.target.id;
      let myLinks = {
        repo: "",
        live: "",
      };
      if (id === "1") {
        myLinks = {
          repo: links.project1.repo,
          live: links.project1.live,
        };
      }
      if (id === "2") {
        myLinks = {
          repo: links.project2.repo,
          live: links.project2.live,
        };
      }
      if (id === "3") {
        myLinks = {
          repo: links.project3.repo,
          live: links.project3.live,
        };
      }
      return myLinks;
    };
  
    const toggleModal = (id) => {
      setModal(!modal);
      const links = getLinks(id);
      setRepo(links.repo);
      setLive(links.live);
    };

    return {modal, live, repo, toggleModal};
}