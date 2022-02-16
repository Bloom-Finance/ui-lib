import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Avatar from '../../components/avatar'
import '../../styles/index.css'

export default {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />

export const Principal = Template.bind({})