import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Footer from '../../components/footer'
import '../../styles/index.css'

export default {
    title: 'Components/Footer',
    component: Footer,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />

export const Principal = Template.bind({})