import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '../../components/button'
import OrderTicket from '../../controls/orderTicket'
import '../../styles/index.css'
import Container from '../../components/container'
import SimplePage from '../../components/simplePage'

export default {
    title: 'Components/Order',
    component: OrderTicket,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof OrderTicket>

const Template: ComponentStory<typeof OrderTicket> = args =>  <div className='bg-gray-200 h-screen w-screen items-center justify-center'>
    <div style={{width: '390px', height: '844px'}}>
        <SimplePage header={<></>} footer={ <Button label='Continue'/>}>
            <Container type="row" justify="center"  className="h-4/5 mt-16">
                <OrderTicket {...args} />
            </Container>
        </SimplePage>
    </div>
</div>
    


export const Completed = Template.bind({})

Completed.args = {
    status:'completed',
    currencyAmount: 15878,
    description: 'Reseva hotel Los Andes',
}

export const Pending = Template.bind({})
Pending.args = {
    status:'pending',
    currencyAmount: 30212,
    description: 'Reseva hotel Los Alamos',
    
}

export const Cancelled = Template.bind({})
Cancelled.args = {
    status:'cancelled',
    currencyAmount: 22567,
    description: 'Reseva hotel Los Aromos',
   
}