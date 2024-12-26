import Link from "next/link";
import Form from "./Form"
import { __paths } from "@/utils";

export default function Page() {
    return (
        <div>
                   <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Remember your password?
            <Link href={__paths.signIn} className="text-black hover:underline">
            Login
          </Link>
          </p>
        </div>

            <Form/>
        </div>
    );
}