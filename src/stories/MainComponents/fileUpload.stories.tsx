import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import FileUpload from '../../controls/fileUpload'
import '../../styles/index.css'

export default {
    title: 'Components/FileUpload',
    component: FileUpload,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof FileUpload>

const Template: ComponentStory<typeof FileUpload> = args => (
    <FileUpload {...args} />
)

export const Principal = Template.bind({})
