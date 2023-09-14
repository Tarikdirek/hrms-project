import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
export default function Account() {
  return (
    <div>
        <Menu.Menu>
            <Button primary>Login</Button>
            <Button primary >Sign Up</Button>
        </Menu.Menu>
    </div>
  )
}
