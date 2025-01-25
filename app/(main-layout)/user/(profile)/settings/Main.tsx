"use client";

import { AppInput } from "@/components/formComponents";
import { SettingListTile } from "@/components/settings";
import { USER_SETTINGS } from "@/data/settings";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCaretRight } from "react-icons/fa6";

export default function SettingsMain() {
  const [keyword, setKeyword] = useState("");
  const filteredSettings = useMemo(() => {
    const allSettings = USER_SETTINGS.flatMap((setting) => setting.items);
    return allSettings.filter((setting) =>
      setting.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }, [keyword]);

  return (
    <div className="flex flex-col gap-4 md:gap-6 pt-6 lg:px-6">
      <AppInput
        variant="app-input-white-bordered"
        name="search"
        placeholder="Search"
        icon={<CiSearch />}
        value={keyword}
        onChange={setKeyword}
      />
      {keyword.trim().length >= 1 ? (
        <div>
          <h3 className="lg:text-lg font-medium px-2">
            Search results for &apos;{keyword}&apos;
          </h3>
          <div className="flex flex-col items-center justify-between py-2 px-3 rounded-md bg-white">
            {filteredSettings.map((item, index) => (
              <SettingListTile href={item.link} key={index} prefix={item.icon}>
                {item.title}
              </SettingListTile>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {USER_SETTINGS.map((setting, i) => (
            <div key={i}>
              <h3 className="lg:text-lg font-medium px-2">{setting.title}</h3>
              <div className="flex flex-col items-center justify-between py-2 px-3 rounded-md bg-white">
                {setting.items.map((item, index) => (
                  <SettingListTile
                    href={item.link}
                    key={index}
                    prefix={item.icon}
                  >
                    {item.title}
                  </SettingListTile>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
