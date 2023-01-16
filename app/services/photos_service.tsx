import { Photo } from "../models/photo_model";

const getPhotos = async (): Promise<Photo[]> => {

    const url = 'https://jsonplaceholder.typicode.com/photos';
    const res = await fetch(url);

    if (res.ok) {
        const photoData: Photo[] = await res.json();
        return photoData;
    } else {
        throw new Error('Something went wrong')
    }
};
const getPhotoById = async (id: string): Promise<Photo> => {

    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const res = await fetch(url);

    if (res.ok) {
        const photoData: Photo = await res.json();
        return photoData;
    } else {
        throw new Error('Something went wrong')
    }
};

export { getPhotos, getPhotoById };