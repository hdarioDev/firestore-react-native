import { db } from './config';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore';

export const getCollection = async (collectionName: string) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addDocument = async (collectionName: string, data: any) => {
    return await addDoc(collection(db, collectionName), data);
};

export const updateDocument = async (collectionName: string, id: string, data: any) => {
    return await updateDoc(doc(db, collectionName, id), data);
};

export const deleteDocument = async (collectionName: string, id: string) => {
    return await deleteDoc(doc(db, collectionName, id));
};
