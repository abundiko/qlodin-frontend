import { AppIcons } from "@/components/icons/AppIcons";
import { __paths } from "@/utils";
import { ReactNode } from "react";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaBell, FaCircleMinus, FaUser } from "react-icons/fa6";
import { IoMdInformationCircle, IoMdLock } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { BiSolidNotification } from "react-icons/bi";
import { CgRename } from "react-icons/cg";
import { MdEmail } from "react-icons/md";

type SettingItem = {
  title: string;
  icon: ReactNode;
  link: string;
};

type SettingGroup = {
  title: string;
  items: SettingItem[];
};

const accountSettings: SettingItem[] = [
  {
    title: "Profile Settings",
    icon: <FaUser />,
    link: __paths.userSettingsProfile,
  },
  {
    title: "Change Driptag/Username",
    icon: <CgRename />,
    link: __paths.userSettingsDriptag,
  },
  {
    title: "Change Email",
    icon: <MdEmail />,
    link: __paths.userSettingsEmail,
  },
  {
    title: "Account Information",
    icon: <IoMdInformationCircle />,
    link: __paths.userSettingsProfile,
  },
  {
    title: "Subscription & Billing",
    icon: <BsFillCreditCardFill />,
    link: __paths.userSettingsProfile,
  },
];

const privacySettings: SettingItem[] = [
  {
    title: "Activity Status",
    icon: <AppIcons.activity />,
    link: __paths.userSettingsProfile,
  },
  {
    title: "Profile Visibility",
    icon: <LuEye />,
    link: __paths.userSettingsProfile,
  },
  {
    title: "Blocking & Restrictions",
    icon: <FaCircleMinus />,
    link: __paths.userSettingsProfile,
  },
  {
    title: "Data Sharing",
    icon: <AppIcons.dataSharing />,
    link: __paths.userSettingsProfile,
  },
];

const notificationSettings: SettingItem[] = [
  {
    title: "Push Notifications",
    icon: <FaBell />,
    link: __paths.userSettingsProfile,
  },
  {
    title: "Email Notifications",
    icon: <AppIcons.envelopeOpen />,
    link: __paths.userSettingsProfile,
  },
  {
    title: "In-app Notifications",
    icon: <BiSolidNotification />,
    link: __paths.userSettingsProfile,
  },
];

const securitySettings: SettingItem[] = [
  {
    title: "Password & Login",
    icon: <IoMdLock />,
    link: __paths.userSettingsPassword,
  },
  {
    title: "Two-factor Authentication",
    icon: <AppIcons.password />,
    link: __paths.userSettingsProfile,
  },
];

export const USER_SETTINGS: SettingGroup[] = [
  {
    title: "Account Settings",
    items: accountSettings,
  },
  {
    title: "Privacy Settings",
    items: privacySettings,
  },
  {
    title: "Notification Settings",
    items: notificationSettings,
  },
  {
    title: "Security Settings",
    items: securitySettings,
  },
];
