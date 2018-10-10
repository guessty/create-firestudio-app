import * as React from 'react'
import { Flex } from 'react-grid-flexbox'
//
import AppLayout from '@layouts/App'
import TodoList from '@containers/TodoList'
//

export default () => (
  <AppLayout>
    <Flex gutter="2rem">
      <Flex gutter="0.5rem">
        <h1>Plugins</h1>
        <strong>Extend your app further with prebuilt and preconfigured plugins.
           Plug and play at its finest.</strong>
      </Flex>
      <hr />
      <Flex gutter="1rem">
        <p>Developing with Firestudio aims to promote convention over configuraton
           and plugins are no different.</p>
        <p>Where approprite enabled plugins will auto-register themselves with the
           store and be available for use within your app.</p>
        <p>Firestudio's plugins are created with best practices in mind and are
           designed to provide as much
           functionality out of the box without the need for any configuraton.</p>
      </Flex>
      <h2>Example - Todo List Plugin</h2>
      <Flex gutter="1rem">
        <p>As an example the basic project comes with a todo list plugin.</p>
        <p>The plugin has been pre-configured to use the application's store and
           the page watches the store for updates.</p>
        <p>Try adding and removing tasks:</p>
        <TodoList />
      </Flex>
    </Flex>
  </AppLayout>
)
