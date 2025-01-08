"use client";

import { suggestUsernamesWithAi } from "@/actions";
import { useSimpleDebounce } from "@/hooks";
import { UsernameSuggestionParams } from "@/lib/gemini";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { BsStars } from "react-icons/bs";
import { motion } from "framer-motion";

export default function UsernameSuggestions({
  onSelect,
  ...props
}: UsernameSuggestionParams & {
  onSelect: (username: string) => void;
}) {
  const [debouncedProps] = useSimpleDebounce(props);
  const { data, isLoading } = useQuery({
    queryKey: ["user_name_suggestions", debouncedProps],
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    queryFn: async () => {
      return await suggestUsernamesWithAi(debouncedProps);
    },
  });

  return (
    <AnimatePresence mode="popLayout">
      {!!debouncedProps.firstName && !!debouncedProps.lastName && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 28 }}
          exit={{ opacity: 0, height: 0 }}
          className="flex gap-2 items-center"
        >
          <BsStars
            className={`text-lg flex-shrink-0 ${
              isLoading ? "animate-bounce repeat-infinite" : ""
            }`}
          />
          <div className="flex flex-row overflow-x-auto gap-2">
            {!!data &&
              data.map((item, index) => (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.2 }}
                  key={item}
                  onClick={() => onSelect(item)}
                  className="rounded bg-dark-800 hover:bg-neutral-800 text-white btn px-2 py-0.5 text-sm"
                  type="button"
                  role="button"
                >
                  {item}
                </motion.button>
              ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
