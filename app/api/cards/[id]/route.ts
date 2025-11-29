import { NextResponse } from 'next/server';
import { db, appId, initFirebase } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // 1. Ambil ID dari URL (Async di Next.js 15)
  const { id } = await params;

  try {
    // 2. Pastikan koneksi Firebase siap
    await initFirebase();

    // 3. Tentukan lokasi dokumen spesifik di Cloud
    // Path: artifacts -> {appId} -> public -> data -> cards -> {id}
    const cardRef = doc(db, 'artifacts', appId, 'public', 'data', 'cards', id);
    
    // 4. Ambil datanya
    const cardSnap = await getDoc(cardRef);

    // 5. Cek apakah dokumennya ada
    if (!cardSnap.exists()) {
      return NextResponse.json({ message: 'Card not found in Cloud' }, { status: 404 });
    }

    // 6. Kirim data kartu sebagai JSON
    return NextResponse.json(cardSnap.data());

  } catch (error) {
    console.error("Firebase Error:", error);
    return NextResponse.json({ error: "Database Connection Error" }, { status: 500 });
  }
}