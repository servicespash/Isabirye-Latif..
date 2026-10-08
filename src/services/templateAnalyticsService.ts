import { db } from '../lib/firebase';
import { doc, updateDoc, increment, getDoc, setDoc } from 'firebase/firestore';

export const trackTemplateView = async (templateId: string) => {
  const docRef = doc(db, 'templatePopularity', templateId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    await updateDoc(docRef, {
      views: increment(1)
    });
  } else {
    await setDoc(docRef, {
      views: 1
    });
  }
};
