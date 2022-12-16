import { firebase_db } from '../firebaseConfig';

class Repository {
  readInfo(onUpdate) {
    const dbRef = firebase_db.ref('/data');
    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(
        '🚀 ~ file: repository.js:8 ~ Repository ~ dbRef.on ~ data',
        data
      );
      data && onUpdate(data);
    });
    return () => dbRef.off;
  }
}

export default Repository;
