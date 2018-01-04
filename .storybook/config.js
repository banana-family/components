import { configure, addDecorator } from '@storybook/react'
import BaseStyles from '../src/components/base-styles'

if (process.env.NODE_ENV !== 'test') {
  addDecorator(story => <BaseStyles>{story()}</BaseStyles>)
}

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
