import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Receipt from '../../components/receipt'
import '../../styles/index.css'

export default {
    title: 'Components/Receipt',
    component: Receipt,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Receipt>

const Template: ComponentStory<typeof Receipt> = args => <Receipt {...args} />

export const Principal = Template.bind({})