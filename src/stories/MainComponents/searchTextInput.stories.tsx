import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SearchTextInput from '../../components/searchTextInput'
import '../../styles/index.css'

export default {
    title: 'Components/SearchTextInput',
    component: SearchTextInput,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof SearchTextInput>

const Template: ComponentStory<typeof SearchTextInput> = args => <SearchTextInput {...args} />

export const Principal = Template.bind({})