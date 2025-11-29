import { NextResponse } from 'next/server';
import { db, appId, initFirebase } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await initFirebase();
    // Cari dokumen spesifik di folder decks berdasarkan ID
    const deckRef = doc(db, 'artifacts', appId, 'public', 'data', 'decks', id);
    const deckSnap = await getDoc(deckRef);

    if (!deckSnap.exists()) {
      return NextResponse.json({ message: 'Deck not found' }, { status: 404 });
    }

    return NextResponse.json(deckSnap.data());
  } catch (error) {
    return NextResponse.json({ error: "Database Error" }, { status: 500 });
  }
}