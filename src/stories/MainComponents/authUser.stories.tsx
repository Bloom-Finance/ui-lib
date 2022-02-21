import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import AuthUser from '../../components/authUser'
import '../../styles/index.css'

export default {
    title: 'Components/AuthUser',
    component: AuthUser,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof AuthUser>

const Template: ComponentStory<typeof AuthUser> = args => <AuthUser {...args} />

export const Principal = Template.bind({})
