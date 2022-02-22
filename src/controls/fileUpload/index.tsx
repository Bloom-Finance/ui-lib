import React, { useState } from 'react'
import MerchantStore from '../../../../store/merchant.store'
import { firebaseManager } from '../../../../services/firebase.services'
import { useEffect } from 'react'

interface FileUploadProps {
    label: string
    placeholder: string
    extensions: Array<string>
    optionalParams?: {
        fileToShow: string
        hasToUpdate?: boolean
    }
}

const FileUpload = (props: FileUploadProps) => {
    /*Manage blob*/
    const [file, setFile] = useState<FormData>()
    const [blob, setBlob] = useState<string>()
    /*File info set in state*/
    const [fileInfo, setFileInfo] = useState<any>()
    const [preview, setPreview] = useState(false)
    const checkExtension = (file: File): { ext: string; correct: boolean } => {
        const ext: string = file.type.split('/')[1]
        const correctExt = props.extensions.filter(e =>
            ext.includes(e) ? true : false
        )
        return correctExt.length > 0
            ? { ext, correct: true }
            : { ext, correct: false }
    }
    const checkImgName = (name: string, ext: string): string => {
        const splitedName = name.split('.')
        const formattedName = `${Date.now()}${splitedName[0].replace(
            /\s/g,
            ''
        )}.${ext}`
        return formattedName
    }
    const previewFile = async () => {
        if (!props.optionalParams?.hasToUpdate && !blob) {
            const blob = URL.createObjectURL(file?.get('file') as Blob)
            setBlob(blob)
        }
        setPreview(!preview)
    }
    const deleteFile = () => {
        if (fileInfo?.fileName) {
            if (preview) {
                setPreview(false)
                setBlob(undefined)
            }
            MerchantStore.update(s => {
                s.company_logo = ''
            })
            //Reset state
            setFile(undefined)
            setFileInfo(undefined)
            firebaseManager
                .deleteFile(fileInfo?.fileName, 'companies')
                .catch(err => {
                    console.error(err)
                })
        }
    }
    const onChangeHandler = (e: any) => {
        if (e.target.files.length > 0) {
            if (file) deleteFile()
            const files: Array<File> = e.target.files
            files.length > 1 && console.error('Cant upload more than 1 file')
            const uploadedFile = files[0]
            const { ext, correct: hasCorrectExt } = checkExtension(uploadedFile)
            if (hasCorrectExt) {
                const formattedName = checkImgName(uploadedFile.name, ext)
                const data = new FormData()
                data.append('file', uploadedFile, formattedName)
                firebaseManager
                    .uploadFile(data.get('file') as File, 'companies')
                    .then(() => {
                        setFileInfo({
                            fileName: formattedName,
                            extension: ext,
                            size: uploadedFile.size
                        })
                        setFile(data)
                        MerchantStore.update(s => {
                            s.company_logo = formattedName
                        })
                    })
                    .catch(err => {
                        console.error(err)
                    })
            } else {
                console.error('Incorrect extension!!')
            }
        }
    }
    useEffect(() => {
        ;(async () => {
            if (props.optionalParams?.fileToShow) {
                if (props.optionalParams.hasToUpdate) {
                    try {
                        const fileMetadata =
                            await firebaseManager.getFileMetadata(
                                props.optionalParams.fileToShow,
                                'companies'
                            )
                        const blob = await firebaseManager.getFileBlobUrl(
                            fileMetadata.fullPath
                        )
                        setFileInfo({
                            fileName: props.optionalParams.fileToShow
                        })
                        setBlob(blob)
                    } catch (error) {
                        console.error(error)
                    }
                }
            }
        })()
    }, [])
    return (
        <div>
            <div className="form-control m b-4">
                <label className="text-black">
                    <span className="label-text">{props.label}</span>
                </label>
                <div className="relative">
                    <input
                        type="file"
                        onChange={onChangeHandler}
                        placeholder={props.placeholder}
                        className="w-full pr-16 border-b"
                    />
                    <button className="absolute top-0 right-0    btn-square btn-xs drawer-button">
                        <CameraIcon />
                    </button>
                    <div className="flex flex-col">
                        {fileInfo?.fileName && (
                            <>
                                <span>{fileInfo?.fileName}</span>
                                <span onClick={previewFile}>Preview</span>
                                <span onClick={deleteFile}>Delete</span>
                            </>
                        )}
                        {preview && (
                            <iframe
                                className="h-screen w-full"
                                src={`${blob}`}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FileUpload

const CameraIcon = () => (
    <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1 6C1 4.89543 1.89543 4 3 4H3.92963C4.59834 4 5.2228 3.6658 5.59373 3.1094L6.40627 1.8906C6.7772 1.3342 7.40166 1 8.07037 1H11.9296C12.5983 1 13.2228 1.3342 13.5937 1.8906L14.4063 3.1094C14.7772 3.6658 15.4017 4 16.0704 4H17C18.1046 4 19 4.89543 19 6V15C19 16.1046 18.1046 17 17 17H3C1.89543 17 1 16.1046 1 15V6Z"
            stroke="#111827"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z"
            stroke="#111827"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)
