"use client";

import Link from "next/link";
import { ArrowBackIcon } from "@/src/components/svg/ArrowBackIcon";
import ProfileDetailsSettings from "@/src/components/ui/profileSettings/ProfileDetailsSettings";

export default function ProfileDetailsSettingsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center p-4 border-b border-gray-200">
        <Link href="/profile" className="absolute left-4">
          <ArrowBackIcon />
        </Link>
        <h1 className="text-lg font-medium flex-1 text-center">
          Profiiliandmed
        </h1>
      </div>
      <ProfileDetailsSettings />
    </div>
  );
}
