import React, { useState } from 'react'
import type { NextPage } from 'next'
import Icon from '../../components/icon'
import { DebounceInput } from 'react-debounce-input'
import lunr from 'lunr'
import _ from 'lodash'
interface Props {
    setSearchIsOpen: any
    list: Array<any>
    fieldId: string
    fieldName: string
    updateListFunction: any
}
const Component = (props: Props): JSX.Element => {
    const [showTextSearch, setShowTextSearch] = useState(false)

    const filterList = (pattern: string) => {
        const idx = lunr(function () {
            this.ref(props.fieldId)
            this.field(props.fieldName)

            props.list.forEach(function (this: any, doc) {
                this.add(doc)
            }, this)
        })

        const patterSearchResult = idx.search(`*${pattern}*`).map(r => r.ref)
        const finalResult = props.list.filter(l =>
            _.includes(patterSearchResult, l.id)
        )
        console.log(props.list)
        props.updateListFunction(finalResult)
    }

    return (
        <div>
            {!showTextSearch && (
                <div
                    onClick={() => {
                        setShowTextSearch(true)
                        props.setSearchIsOpen(true)
                    }}
                    className="cursor-pointer"
                >
                    <Icon type="SEARCH" stroke={1} />
                </div>
            )}

            {showTextSearch && (
                <div>
                    <div className="form-control">
                        <div className="flex">
                            <DebounceInput
                                type="text"
                                onChange={event =>
                                    filterList(event.target.value)
                                }
                                placeholder="Name"
                                className="input input-bordered"
                            />
                            <div
                                className="cursor-pointer"
                                onClick={() => {
                                    props.setSearchIsOpen(false)
                                    setShowTextSearch(false)
                                }}
                            >
                                <Icon type="CLOSE" stroke={1} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Component
