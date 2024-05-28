
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB36UGA1yvOtt9kI_2Z2u6iD7e5qiQToAY",
  authDomain: "vanlife-fdf2a.firebaseapp.com",
  projectId: "vanlife-fdf2a",
  storageBucket: "vanlife-fdf2a.appspot.com",
  messagingSenderId: "927488280382",
  appId: "1:927488280382:web:693d65c983a9ffab998e6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)


export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}