import { doc, getDoc, setDoc, increment } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { handleFirestoreError, OperationType } from '../lib/firebaseUtils';

const STATS_PATH = 'siteStats/global';

export interface SiteStats {
  visitors: number;
  views: number;
  downloads: number;
}

export async function getStats(): Promise<SiteStats> {
  try {
    const statsDoc = await getDoc(doc(db, STATS_PATH));
    if (!statsDoc.exists()) {
      return { visitors: 0, views: 0, downloads: 0 };
    }
    return statsDoc.data() as SiteStats;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, STATS_PATH);
    return { visitors: 0, views: 0, downloads: 0 };
  }
}

export async function incrementStat(stat: keyof SiteStats) {
  try {
    const statRef = doc(db, STATS_PATH);
    await setDoc(statRef, {
      [stat]: increment(1)
    }, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, STATS_PATH);
  }
}
