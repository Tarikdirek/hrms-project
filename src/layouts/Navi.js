import React from "react";
import {  Container, Menu } from 'semantic-ui-react'
import Account from "./Account";
import SearchJob from "./SearchJob";

export default function Navi() {
  return (
    <div>
      <Menu inverted size="large" fixed="top" >
        <Container >
          <Menu.Item
          name="Main Page"
        />
        <Menu.Item
          name="Career Guide"
        />
        <Menu.Menu position="right" >
            <SearchJob></SearchJob>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Account></Account>
        </Menu.Menu>  
        </Container>
      </Menu>
    </div>
  );
}
