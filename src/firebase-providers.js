import { getFirestore } from 'firebase/firestore';
import { useFirebaseApp, FirestoreProvider } from 'reactfire';

export const FirebaseProviders = ({ children }) => {
  const app = useFirebaseApp();
  const firestore = getFirestore(app);

  return <FirestoreProvider sdk={firestore}>{children}</FirestoreProvider>;
};
