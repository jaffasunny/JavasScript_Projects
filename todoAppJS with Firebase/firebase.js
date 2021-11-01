// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCApAKLuBnmalRuoZJbPAT1y_HZvpuO1so",
    authDomain: "todo-app-6c608.firebaseapp.com",
    projectId: "todo-app-6c608",
    storageBucket: "todo-app-6c608.appspot.com",
    messagingSenderId: "197709316132",
    appId: "1:197709316132:web:1cb8d14f0fb2888a8b18b1",
    measurementId: "G-RYRX3LNJPE"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
