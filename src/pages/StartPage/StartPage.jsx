import React from "react";
import styles from "./StartPage.module.css";
import StartArticle from "../../components/StartArticle/StartArticle";
import LearnMore from "../../components/LearnMore/LearnMore";
import Projects from "../../components/Projects/Projects";
import zanoTradeLogo from "../../assets/zano-trade_logo_square.png";
import clBridgeLogo from "../../assets/confidential_bridge_logo_square.png";
import bazaarLogo from "../../assets/bazaar_logo_square.png";

const content = [
  {
    title: "Getting started",
    items: [
      {
        link: "#",
        linkText: "Add link",
        content:
          "At vero eos et accusamus et iusto odio dignissimosducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
      },
    ],
  },
  {
    title: "Start learning",
    items: [
      {
        link: "#",
        linkText: "Add link",
        content:
          "At vero eos et accusamus et iusto odio dignissimosducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
      },
    ],
  },
  {
    title: "Mine and Stake",
    items: [
      {
        link: "#",
        linkText: "Add link",
        content:
          "At vero eos et accusamus et iusto odio dignissimosducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
      },
    ],
  },
  {
    title: "Build on  Zano",
    items: [
      {
        link: "#",
        linkText: "Add link",
        content:
          "At vero eos et accusamus et iusto odio dignissimosducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
      },
      {
        link: "#",
        linkText: "Add link",
        content:
          "At vero eos et accusamus et iusto odio dignissimosducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
      },
    ],
  },
];

const links = [
  {
    name: "Developers",
    link: "#",
  },
  {
    name: "Users",
    link: "#",
  },
  {
    name: "Miners",
    link: "#",
  },
  {
    name: "Stakers",
    link: "#",
  },
];
const projects = [
  {
    name: "Confidential Bridge",
    link: "https://bridge.confidentiallayer.com",
    logo: clBridgeLogo,
  },
  {
    name: "Zano Trade",
    link: "https://trade.zano.org",
    logo: zanoTradeLogo,
  },
  { name: "Bazaar", link: "#", logo: bazaarLogo },
];

function StartPage() {
  return (
    <>
      <main className={styles.container}>
        <StartArticle content={content} />
        <Projects projects={projects} />
        <LearnMore links={links} />
      </main>
    </>
  );
}

export default StartPage;
