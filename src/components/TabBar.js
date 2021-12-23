import { Link, useLocation } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { CgMenuGridR } from "react-icons/cg";
import { BiNews } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

import { Theme } from "../theme";

export default function TabBar() {

  const tabIconSize = "2rem";
  const location = useLocation();
  const isHomeSelected = location.pathname === "/";
  const isAdventuresSelected = location.pathname === "/adventures";
  const isMagazineSelected = location.pathname === "/magazine";
  const isSettingsSelected = location.pathname === "/settings";

  const getTabStyle = (isSelected) => ({ ...styles.tab, color: isSelected ? Theme.colors.accent : Theme.colors.text });

  return (
    <div style={styles.tabsContainer}>
      <nav style={styles.tabs}>
        <Link to="/" style={getTabStyle(isHomeSelected)}>
          <TiHome size={tabIconSize} />
          <span style={styles.tabText}>Home</span>
        </Link>
        <Link to="/adventures" style={getTabStyle(isAdventuresSelected)}>
          <CgMenuGridR size={tabIconSize} />
          <span style={styles.tabText}>Adventures</span>
        </Link>
        <Link to="/magazine" style={getTabStyle(isMagazineSelected)}>
          <BiNews size={tabIconSize} />
          <span style={styles.tabText}>Magazine</span>
        </Link>
        <Link to="/settings" style={getTabStyle(isSettingsSelected)}>
          <FiSettings size={tabIconSize} />
          <span style={styles.tabText}>Settings</span>
        </Link>
      </nav>
    </div>
  )
}

const styles = {
  tabsContainer: {
    zIndex: 10,
    backgroundColor: Theme.colors.background,
    height: "6rem",
  },
  tabs: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    height: "100%",
    listStyle: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
  },
  tab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: Theme.colors.text,
    flex: 1,
    // padding: "20px",
    textDecoration: "none",
    // flexBasis: "25%",
  },
  tabText: {
    fontFamily: "Source Sans Pro",
  }
}