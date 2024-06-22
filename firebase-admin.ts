import { initFirestore } from "@auth/firebase-adapter";
import admin from "firebase-admin";

let app;

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY;

if (!projectId || !clientEmail || !privateKey) {
  throw new Error("Missing required Firebase configuration.");
}

if (!admin.apps.length) {
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: projectId,
      clientEmail: clientEmail,
      privateKey: privateKey,
    }),
  });
}

const adminDb = initFirestore({
  credential: admin.credential.cert({
    projectId: projectId,
    clientEmail: clientEmail,
    privateKey: privateKey,
  }),
});

const adminAuth = admin.auth(app);

export { adminAuth, adminDb };
