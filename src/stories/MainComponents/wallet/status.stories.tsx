import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import WalletStatus from '../../../controls/wallet/status'
import '../../../styles/index.css'

export default {
    title: 'Controls/WalletStatus',
    component: WalletStatus,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof WalletStatus>

const Template: ComponentStory<typeof WalletStatus> = args => (
    <WalletStatus {...args} />
)

export const Principal = Template.bind({})
Principal.args = {}
