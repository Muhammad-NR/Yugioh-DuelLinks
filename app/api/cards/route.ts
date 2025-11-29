import { NextResponse } from 'next/server';
import { db, appId, initFirebase } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
  try {
    await initFirebase();
    const cardsRef = collection(db, 'artifacts', appId, 'public', 'data', 'cards');
    const snapshot = await getDocs(cardsRef);
    const cards = snapshot.docs.map(doc => doc.data());
    
    return NextResponse.json(cards);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch cards" }, { status: 500 });
  }
}