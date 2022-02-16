import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Label from '../../components/label'
import '../../styles/index.css'

export default {
    title: 'Components/Label',
    component: Label,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = args => <Label {...args} />

export const Principal = Template.bind({})