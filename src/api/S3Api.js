import axios from 'axios'

export const S3Url = 'https://ahoy-photo.s3.eu-central-1.amazonaws.com/'

export const createImageUrl = (key) => S3Url + key

export const getImageUploadPresignedUrl = () => axios.get('https://c6ew8xpm95.execute-api.eu-central-1.amazonaws.com/default/getPresignedImageURL')

export const uploadImage = (presignedUrl, image) => {
    axios.put(presignedUrl, image, {
        headers: {
            'Content-Type': image.type
        }
    })
}