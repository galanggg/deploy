import { Column, Menu, Image } from "rbx";

const Sidebar = (props) => {
  return (
    <Column.Group>
      <Column size={3}>
        <Menu className="sidebar__menu">
          <Image.Container>
            <Image src="/static/images/logo.jpg" className="sidebar__logo" />
          </Image.Container>
          <Menu.List>
            <Menu.List.Item
              active={props.isActive === "scoreboard" ? true : false}
              name="scoreboard"
              onClick={props.clicked}
            >
              <span className="icon pr-10">
                <i className="fa fa-table"></i>
              </span>
              Scoreboard
            </Menu.List.Item>
            <Menu.List.Item
              active={props.isActive === "patching" ? true : false}
              name="patching"
              onClick={props.clicked}
            >
              <span className="icon pr-10">
                <i className="fa fa-info-square"></i>
              </span>
              Patching Guide
            </Menu.List.Item>
          </Menu.List>
          <Menu.List>
            <Menu.List.Item
              menu={
                <Menu.List>
                  <Menu.List.Item>Submit Flag</Menu.List.Item>
                  <Menu.List.Item>Accepted Flag</Menu.List.Item>
                </Menu.List>
              }
            >
              <span className="icon pr-10">
                <i className="fa fa-pennant"></i>
              </span>
              Flagger
            </Menu.List.Item>
          </Menu.List>
          <Menu.List>
            <Menu.List.Item
              menu={
                <Menu.List>
                  <Menu.List.Item>S01 - Firmware</Menu.List.Item>
                  <Menu.List.Item>S02 - Sandbox</Menu.List.Item>
                  <Menu.List.Item>S03 - Image Manipulator</Menu.List.Item>
                  <Menu.List.Item>S04 - Code Runner</Menu.List.Item>
                  <Menu.List.Item>S05 - Crypto</Menu.List.Item>
                  <Menu.List.Item>S06 - Hades</Menu.List.Item>
                  <Menu.List.Item>S07 - Exif Reader</Menu.List.Item>
                </Menu.List>
              }
            >
              <span className="icon pr-10">
                <i className="fa fa-cogs"></i>
              </span>
              Services
            </Menu.List.Item>
          </Menu.List>
        </Menu>
      </Column>
      {props.children}
      <style jsx>{`
        .pr-10 {
          padding-right: 10px;
        }
        :global(.sidebar__menu) {
          position: sticky;
          top: 30px;
        }
        :global(.sidebar__logo) {
          margin-bottom: 30px;
          width: 200px !important;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </Column.Group>
  );
};

export default Sidebar;
