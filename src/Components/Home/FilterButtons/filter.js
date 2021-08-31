import "./filter.css";

const TabItem = (props) => {
  const { eachTab, onChangeTab, isActive } = props;
  const onClickTab = () => {
    onChangeTab(eachTab.tabId);
  };
  const active = isActive ? "active-button" : "none";
  return (
    <button
      type="button"
      className={`tab-button ${active}`}
      onClick={onClickTab}
    >
      {eachTab.displayText}
    </button>
  );
};
export default TabItem;
