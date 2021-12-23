import { useLocation } from "react-router-dom";
import { ModelManager } from "@adobe/aem-spa-page-model-manager";
import { IoChevronBack } from "react-icons/io5";
import { Theme } from "../theme";
import {
  AEMResponsiveGrid,
  V2Image,
  V2Title,
} from "../components/aem";

export default function MagazineDetail() {

  const { pathname } = useLocation();
  const pagePath = pathname.split(".html")[0];
  ModelManager.initializeAsync(pagePath);

  return (
    <div className="content" style={styles.container}>
      <div style={styles.headerWrapper}>
        <div style={styles.headerContainer}>
          <IoChevronBack onClick={() => window.history.back()} size="2rem" />
          <V2Title style={styles.pageTitle} pagePath={pagePath} itemPath="root/title" />
        </div>
        <div style={styles.featuredImage}>
          <V2Image pagePath={pagePath} itemPath="root/featured-image" />
        </div>
      </div>
      <div style={styles.contentStyles}>
        <AEMResponsiveGrid pagePath={pagePath} itemPath="root/responsivegrid" />
      </div>
    </div>
  )
}

const styles = {
  container: {},
  pageTitle: {
    padding: "1rem",
  },
  featuredImage: {
    margin: "1rem",
  },
  contentStyles: {
    backgroundColor: Theme.colors.detailBackground,
    color: Theme.colors.detailText,
    paddingTop: "1rem",
  },
  adventureCard: {
    padding: "1rem",
  },
  titleSkeleton: {
    height: "2.5rem",
    width: "85%",
    margin: "1rem"
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "column"
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "1rem 0 0",
    alignItems: "center",
  },
}
