import { doc, updateDoc, increment, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const trackPageView = async () => {
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
    console.error('Analytics error:', error);
  }
};

export const trackUniqueVisitor = async () => {
  const visitorKey = 'cymatic_visited';
  if (!localStorage.getItem(visitorKey)) {
    try {
      const statsRef = doc(db, 'siteStats', 'global');
      await updateDoc(statsRef, {
        visitors: increment(1)
      });
      localStorage.setItem(visitorKey, 'true');
    } catch (error) {
      console.error('Visitor tracking error:', error);
    }
  }
};

export const trackInteraction = async (elementId: string, action: string) => {
  try {
    const interactionRef = doc(db, 'interactions', `${new Date().toISOString().split('T')[0]}_${elementId}`);
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
    console.error('Interaction tracking error:', error);
  }
};

export const getGlobalStats = async () => {
  try {
    const statsRef = doc(db, 'siteStats', 'global');
    const statsDoc = await getDoc(statsRef);
    return statsDoc.exists() ? statsDoc.data() : null;
  } catch (error) {
    console.error('Fetch stats error:', error);
    return null;
  }
};
