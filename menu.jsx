<Menu
            defaultSelectedKeys={[selectedPath]}
            selectedKeys={[selectedPath]}
            theme="light"
            mode="vertical"
            style={{ borderColor: "transparent" }}
            defaultOpenKeys={openKeys}
            onClick={this.handleOpenSubmenu}
            subMenuOpenDelay={0.2}
          >
            {allowedMenuItems && this.renderMenu()}
          </Menu>
