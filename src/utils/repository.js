import { firebase_db } from '../firebaseConfig';

class Repository {
  constructor() {
    this.dbRef = firebase_db.ref('/data');
  }
  storeInfo(info) {
    console.log(info);
    this.dbRef.push(info);
  }

  deleteInfo(info) {
    this.dbRef.remove();
  }

  readInfo(onUpdate) {
    // const dbRef = firebase_db.ref('/data');
    this.dbRef.on('value', (snapshot) => {
      const data = Object.values(snapshot.val());
      console.log(
        '🚀 ~ file: repository.js:8 ~ Repository ~ dbRef.on ~ data',
        data
      );
      data && onUpdate(data);
    });
    return () => this.dbRef.off;
  }
}

export default Repository;
