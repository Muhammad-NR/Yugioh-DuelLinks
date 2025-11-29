// File: app/api/config/route.ts

import { db, appId } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';

const DEFAULT_CONFIG = {
    featuredCardIds: [1, 2, 3, 4], 
    metaTargetTiers: ['S', 'A']
};

export async function GET() {
    try {
        // JALUR KOREKSI: artifacts / appId / public / home_config (C/D/C/D)
        const docRef = doc(db, 'artifacts', appId, 'public', 'home_config');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return NextResponse.json(docSnap.data());
        } else {
            return NextResponse.json(DEFAULT_CONFIG);
        }
    } catch (error) {
        console.error("FIREBASE CONFIG ERROR:", error);
        return NextResponse.json(DEFAULT_CONFIG);
    }
}