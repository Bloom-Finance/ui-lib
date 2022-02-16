import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/router'
import MerchantStore from '../../store/merchant.store'
import WalletGuard from '../wallet/walletGuard'
import InputText from '../input/inputText'
import SelectIcon from '../select/selectIcon'
import InputFile from '../fileUpload/fileUpload'
import Header from '../componentPages/login/header'
import Button from '../button'
import Footer from '../footer'
import Container from '../container'
import SimplePage from '../simplePage'

interface BusinessProps {
    update?: boolean
}

const Business = (props: BusinessProps) => {
    const router = useRouter()
    const merchantData = MerchantStore.useState(s => s)
    const {
        control,
        handleSubmit,
        formState: { isValid, isDirty }
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            company: merchantData.company || '',
            bussiness_currency: merchantData.bussiness_currency || ''
        }
    })
    const onSubmit = (data: any) => {
        MerchantStore.update(s => {
            s.company = data.company
            s.bussiness_currency = data.bussiness_currency
        })
        if (!props.update) {
            router.push('/profile/create/currency')
        } else {
            router.push('/profile/edit/currency')
        }
    }

    const PageFooter = () => {
        return (
            <Footer>
                <Container type="row" justify="strech">
                    <Button
                        className="px-8"
                        type="submit"
                        disabled={!props.update ? !isDirty || !isValid : false}
                        label="Continue"
                    />
                </Container>
            </Footer>
        )
    }
    const PageHeader = () => {
        return <Header label="Company Information" />
    }
    return (
        <WalletGuard>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="container mx-auto px-8"
            >
                <SimplePage footer={<PageFooter />} header={<PageHeader />}>
                    <div>
                        <Controller
                            name="company"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <InputText
                                    defaultValue={merchantData.company}
                                    controller={field}
                                    placeholder="company name"
                                    label="Company"
                                />
                            )}
                        />
                        <Controller
                            name="bussiness_currency"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <SelectIcon
                                    controller={field}
                                    defaultValue={
                                        merchantData.bussiness_currency
                                    }
                                    placeholder="Select a currency"
                                    options={[
                                        {
                                            value: 'USD',
                                            label: 'USD - Dolares Americanos'
                                        },
                                        {
                                            value: 'ARS',
                                            label: 'ARS - Pesos Argentinos '
                                        }
                                    ]}
                                    label="Business currency"
                                />
                            )}
                        ></Controller>
                        <InputFile
                            extensions={['jpg', 'jpeg']}
                            placeholder="Upload Image"
                            label="Company logo"
                            optionalParams={{
                                fileToShow: merchantData.company_logo,
                                hasToUpdate: props.update
                            }}
                        />
                    </div>
                </SimplePage>
            </form>
        </WalletGuard>
    )
}

export default Business
