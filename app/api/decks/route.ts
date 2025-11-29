import { NextResponse } from 'next/server';
import { db, appId, initFirebase } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
  try {
    await initFirebase();
    const decksRef = collection(db, 'artifacts', appId, 'public', 'data', 'decks');
    const snapshot = await getDocs(decksRef);
    const decks = snapshot.docs.map(doc => doc.data());
    
    return NextResponse.json(decks);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch decks" }, { status: 500 });
  }
}