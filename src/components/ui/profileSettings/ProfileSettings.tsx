import Link from "next/link";
import { HeartIcon } from "../../svg/HeartIcon";
import { SunIcon } from "../../svg/SunIcon";
import { ArrowIcon } from "../../svg/ArrowIcon";

const ProfileSettings = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-5 mt-5 px-5">
        <Link
          href="/profile/settings"
          className="flex items-center justify-between"
        >
          <div className="flex items-center">
            <HeartIcon />
            <span className="ml-2">Profiiliandmed</span>
          </div>
          <div className="w-5 h-5 text-gray-400">
            <ArrowIcon />
          </div>
        </Link>

        <Link href="/profile" className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-orange-400">
              <HeartIcon />
            </div>
            <span className="ml-2">Keel / Language</span>
          </div>
          <div className="w-5 h-5 text-gray-400">
            <ArrowIcon />
          </div>
        </Link>
      </div>

      <div className="h-2 bg-gray-100 my-4"></div>

      <div className="flex flex-col gap-5 mt-5 px-5">
        <Link href="/profile" className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-orange-400">
              <HeartIcon />
            </div>
            <span className="ml-2">Minu rehvihotell</span>
          </div>
          <div className="flex items-center justify-center text-center">
            <SunIcon />
            <span className="ml-1 mr-2">Michelin R19</span>
          </div>
        </Link>

        <Link href="/profile" className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-orange-400">
              <HeartIcon />
            </div>
            <span className="ml-2">Minu broneeringud</span>
          </div>
          <div className="w-5 h-5 text-gray-400">
            <ArrowIcon />
          </div>
        </Link>

        <Link href="/profile" className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-orange-400">
              <HeartIcon />
            </div>
            <span className="ml-2">Minu ostingud</span>
          </div>
          <div className="w-5 h-5 text-gray-400">
            <ArrowIcon />
          </div>
        </Link>
      </div>

      <div className="h-2 bg-gray-100 my-4"></div>

      <div className="flex items-center justify-between px-5">
        <div>
          <p className="font-medium">Olulised teavitused</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-orange-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
      </div>

      <div className="h-2 bg-gray-100 my-4"></div>

      <div className="flex items-center justify-between px-5">
        <div>
          <p className="font-medium">Eripakkumised</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-orange-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
      </div>
    </div>
  );
};

export default ProfileSettings;
