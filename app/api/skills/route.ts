import { NextResponse } from 'next/server';
import { db, appId, initFirebase } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
  try {
    await initFirebase();
    const skillsRef = collection(db, 'artifacts', appId, 'public', 'data', 'skills');
    const snapshot = await getDocs(skillsRef);
    const skills = snapshot.docs.map(doc => doc.data());
    
    return NextResponse.json(skills);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch skills" }, { status: 500 });
  }
}