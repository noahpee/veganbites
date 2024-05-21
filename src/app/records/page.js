'use client'

import Link from "next/link";
import Footer from "../footer";
import Header from "../header";

export default function Records({}) {

    return (
        <main className="w-full h-screen overflow-y-auto flex flex-col pb-2 items-center">
        <Header />
        <div className="flex flex-col w-full min-h-[90%] justify-between">
        <Link href="/report">Back</Link>

        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSpaQO5mhfJ2A_k7-8nG9C-S7qFsdjEhrYJ7LV7f3MPweQQIoxdgpA4ORpxU3zH3cPHQxoYC33OE15u/pubhtml?gid=86996237&amp;single=true" width="100%" height="500px"></iframe>

        </div>
        <Footer />
        </main>
    )
}