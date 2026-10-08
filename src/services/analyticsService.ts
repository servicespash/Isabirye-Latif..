import { doc, updateDoc, increment, getDoc, setDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';

export const trackPageView = async () => {
  const path = 'siteStats/global';
  try {
    const statsRef = doc(db, 'siteStats', 'global');
    const statsDoc = await getDoc(statsRef);
    
    if (!statsDoc.exists()) {
      await setDoc(statsRef, {
        visitors: 1,
        views: 1,
        downloads: 0
      });
    } else {
      await updateDoc(statsRef, {
        views: increment(1)
      });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
};

export const trackUniqueVisitor = async () => {
  const visitorKey = 'cymatic_visited';
  const path = 'siteStats/global';
  if (!localStorage.getItem(visitorKey)) {
    try {
      const statsRef = doc(db, 'siteStats', 'global');
      await updateDoc(statsRef, {
        visitors: increment(1)
      });
      localStorage.setItem(visitorKey, 'true');
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  }
};

export const trackInteraction = async (elementId: string, action: string) => {
  const id = `${new Date().toISOString().split('T')[0]}_${elementId}`;
  const path = `interactions/${id}`;
  try {
    const interactionRef = doc(db, 'interactions', id);
    const interactionDoc = await getDoc(interactionRef);
    
    if (!interactionDoc.exists()) {
      await setDoc(interactionRef, {
        elementId,
        action,
        count: 1,
        lastUpdated: new Date().toISOString()
      });
    } else {
      await updateDoc(interactionRef, {
        count: increment(1),
        lastUpdated: new Date().toISOString()
      });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
};

export const getGlobalStats = async () => {
  const path = 'siteStats/global';
  try {
    const statsRef = doc(db, 'siteStats', 'global');
    const statsDoc = await getDoc(statsRef);
    return statsDoc.exists() ? statsDoc.data() : null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
    return null;
  }
};
