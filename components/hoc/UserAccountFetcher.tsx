import { getUserProfileAction } from "@/actions";
import UserAccountFetcherClient from "./UserAccountFetcherClient";

export default async function UserAccountFetcher() {
  const [user] = await getUserProfileAction();

  return <UserAccountFetcherClient user={user} />;
}
