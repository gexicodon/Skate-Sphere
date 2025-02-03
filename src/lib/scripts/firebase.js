import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import { Post } from '../models/post';


const firebaseConfig = {
    apiKey: "AIzaSyAuIxicMLsB0bLLf4MSttfBSvShHl7B1bs",
    authDomain: "skatesphere-5d685.firebaseapp.com",
    databaseURL: "https://skatesphere-5d685-default-rtdb.firebaseio.com",
    projectId: "skatesphere-5d685",
    storageBucket: "skatesphere-5d685.firebasestorage.app",
    messagingSenderId: "555420402048",
    appId: "1:555420402048:web:3d23a482d0bf1808884165"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const getPosts = async () => {
  try {
      const snapshot = await get(ref(getDatabase(), '/posts'));
      if (snapshot.exists()) {
          return Object.values(snapshot.val()).map(post => {
            //преобразуем строку в объект даты, если данные хранятся как строка
            return new Post(post.title, post.description, post.cover, post.created, post.published, post.content, post.slug);
          });
      } else {
          return [];
      }
  } catch (error) {
      console.error("Ошибка при получении постов:", error);
      return []; // Возвращаем пустой массив при ошибке
  }
};