import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const firebaseAdminConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp({
      credential: cert(firebaseAdminConfig),
    });
  }
}

export function getAdminDB() {
  customInitApp();
  return getFirestore();
}